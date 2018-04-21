import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuoteForm = [];
  // newQuoteForm = [new Quotes(0,"","")];
  @Output() addNewQuote = new EventEmitter<any>();

  submitQuote(newOne){
    // console.log(newOne);
    // this.newQuoteForm.push(new Quotes(newOne.value.id++,newOne.value.author,newOne.value.author));
    // console.log(this.newQuoteForm);
    // this.newQuoteForm.push(newOne);
    this.addNewQuote.emit(new Quotes(newOne.value.id++,newOne.value.author,newOne.value.author))
    newOne.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
