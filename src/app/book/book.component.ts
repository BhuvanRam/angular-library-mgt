import { Component, OnInit,Input } from '@angular/core';
import { Book } from '../Models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book;

  constructor() { }

  // Component life cycle Hooks
  ngOnInit() {
    // All the heavy lifting can be done here
  }

}
