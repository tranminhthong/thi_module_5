import {Component, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  listBook: Book[] = [];
  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe(books => {
      this.listBook = books;
    });
  }
}
