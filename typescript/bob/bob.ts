enum Response {
    question = "Sure.",
    yell = "Whoa, chill out!",
    yelled_question = "Calm down, I know what I'm doing!",
    normal = "Fine. Be that way!",
    default = "Whatever."
};

class Bob {

    hey(message: string):string {
        const isAYell = ():boolean => /^[^a-z]*\!$/.test(message) || /^[A-Z\s]*.?$/.test(message);
        const isAQuestion = ():boolean => /.+\?\s*$/.test(message);
        const isNormal = ():boolean => /^[^a-zA-Z0-9]*$/.test(message);

        if (isAQuestion()) {
            if (isAYell()) return Response.yelled_question;
            return Response.question;
        } else if (isNormal()) {
            return Response.normal;
        } else if (isAYell()) {
            return Response.yell;
        }

        return Response.default;
    }
}

export default Bob