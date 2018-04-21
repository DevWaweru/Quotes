import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  newQuotes = [new Quotes(1,"Richard","The World is a Cycle")];

  detailsToggle(index){
    this.newQuotes[index].showDetails=!this.newQuotes[index].showDetails;
  }
  addQuote(quote){
    let quoteslength = this.newQuotes.length;
    quote.id = quoteslength+1;
    // console.log(quote);
    this.newQuotes.push(quote);
    // console.log(this.newQuotes);
    console.log(quote);
    // console.log(quote.txtQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
