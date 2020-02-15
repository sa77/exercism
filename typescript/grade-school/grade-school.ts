export default class GradeSchool {
    private students: Map<string, string[]> = new Map();

    addStudent = (name: string, grade: number): void => {
        const gradeKey = grade.toString()
        const currentStudents = this.students.get(grade.toString()) || [];
        currentStudents.push(name)
        this.students.set(gradeKey, currentStudents.sort())
    }

    studentRoster = (): Map<string, string[]> => {
        const roster = new Map<string, string[]>();
        for (const [k, v] of this.students) {
            roster.set(k, [...v])
        }
        return roster;
    }

    studentsInGrade = (grade: number): string[] => {
        const gradeStudents = this.students.get(grade.toString()) || [];
        return [...gradeStudents];
    }
}