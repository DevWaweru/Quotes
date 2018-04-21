import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  newQuotes = [new Quotes(1,"Richard","The World is a Cycle",new Date(2018,3,1))];

  detailsToggle(index){
    this.newQuotes[index].showDetails=!this.newQuotes[index].showDetails;
  }
  addVotes(index){
    this.newQuotes[index].vote = this.newQuotes[index].vote+1;
    console.log(this.newQuotes[index].vote);
  }

  minusVotes(index){
    if(this.newQuotes[index].vote > 0)this.newQuotes[index].vote = this.newQuotes[index].vote-1;
    else this.newQuotes[index].vote = 0;
    console.log(this.newQuotes[index].vote);
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
