import { Component } from '@angular/core';
import { Book } from './Models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  book:Book = {
    code : '1',
    name : 'Good Book',
    image : 'https://pbs.twimg.com/profile_images/927446347879292930/Fi0D7FGJ_400x400.jpg'
  }
}
