export class Quiz {
    constructor(public id: number, public question: string, public answer:{ option:string, correct:boolean }[]){}
}
