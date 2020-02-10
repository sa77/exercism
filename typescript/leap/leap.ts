function isLeapYear(year: number) {
    if (year % 4 === 0) {
        switch (year % 100) {
            case 0:
                return year % 400 === 0;

            default:
                return true;
        }
    }
    return false;
}

export default isLeapYear