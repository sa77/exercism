class Matrix {
    public rows: number[][];
    public columns: number[][];

    constructor(matrixString: string) {
        this.rows = matrixString.split('\n').map((row) => {
            return row.split(' ').map(num => Number(num));
        });
        const colLength = this.rows[0].length;
        this.columns = Array(colLength).fill(0).map(() => Array(this.rows.length).fill(0));
        this.rows.some((row, i) => {
            row.some((item, j) => this.columns[j][i] = item);
        })
    }
}

export default Matrix
