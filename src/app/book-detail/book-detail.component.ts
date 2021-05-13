import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id = -1;
  book: Book;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = +param.get('id');
      this.showDetail(this.id);
    });
  }

  ngOnInit() {
  }

  showDetail(id: number) {
    this.bookService.getABook(id).subscribe(book => {
      this.book = book;
    });
  }
}
