import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  newQuotes = [
    new Quotes(1,"Socrates","By all means, marry. If you get a good wife, you'll become happy; if you get a bad one, you'll become a philosopher",new Date(2018,3,1)),
    new Quotes(2,"George Bernard Shaw, Man and Superman","The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
    new Date(2018,3,1)),
    new Quotes(3,"Carroll Bryant","The moment you stop trying to become a better person, is the moment you start to become worse than what you already are.",new Date(2018,3,1)),
    new Quotes(3,"H. Jackson Brown Jr.","Success is getting what you want. Happiness is liking what you get.",new Date(2018,3,1))];

  detailsToggle(index){
    this.newQuotes[index].showDetails=!this.newQuotes[index].showDetails;
  }

  addVotes(index){
    this.newQuotes[index].vote += 1;
    // console.log(this.newQuotes[index].vote);
  }
  
  minusVotes(index){
    if(this.newQuotes[index].vote > 0)this.newQuotes[index].vote -= 1;
    else this.newQuotes[index].vote = 0;
    // console.log(this.newQuotes[index].vote);
  }
  
  // highVotes(index){
  //   let max:number;
  //   console.log("Initial is: "+(max+1));
  //   if(this.newQuotes[index].vote>max+0){
  //     max = this.newQuotes[index].vote;
  //     console.log("Maximum is: "+max);
  //   }
  // }

  quoteDeleted(del, index){
    if(del){
      this.newQuotes.splice(index,1);
    }
  }
  
  addQuote(quote){
    let quoteslength = this.newQuotes.length;
    quote.id = quoteslength+1;
    quote.date = new Date(quote.date);
    // console.log(quote);
    this.newQuotes.push(quote);
    // console.log(this.newQuotes);
    console.log(quote.date);
    // console.log(quote.txtQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
