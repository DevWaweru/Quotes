export class Quotes {
    public id:number; public author:string; public txtQuote:string; public showDetails: boolean;
    constructor(id,author,txtQuote){
        this.id = id;
        this.author = author;
        this.txtQuote = txtQuote;
        this.showDetails = false;
    }
}
