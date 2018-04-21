export class Quotes {
    public id:number; public author:string; public txtQuote:string; public showDetails: boolean; public date:Date; public vote:number;
    constructor(id,author,txtQuote, date){
        this.id = id;
        this.author = author;
        this.txtQuote = txtQuote;
        this.date = date;
        this.vote = 0;
        this.showDetails = false;
    }
}
