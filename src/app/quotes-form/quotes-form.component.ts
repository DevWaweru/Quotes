import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuoteForm = new Quotes(0,"","");
  @Output() addNewQuote = new EventEmitter<Quotes>();

  submitQuote(newOne){
    this.addNewQuote.emit(newOne.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
