class Transcriptor {
    private rnaMap: { [index:string]: string };

    constructor() {
        this.rnaMap = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        };
    }

    toRna(dna: string):string {
        return dna.split('').map((c:string) => {
            let transcribedNeucleotide = this.rnaMap[c];
            if (transcribedNeucleotide === undefined) {
                throw("Invalid input DNA.");
            }
            return transcribedNeucleotide;
        }).join('');
    }
}

export default Transcriptor