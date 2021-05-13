import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../model/book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  id = -1;
  book: Book;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getABook(this.id);
    });
  }

  ngOnInit() {
  }

  getABook(id: number) {
    this.bookService.getABook(id).subscribe(book => {
      this.book = book;
    });
  }

  delete() {
    this.bookService.deleteBook(this.id).subscribe(() => {
      alert('Xóa thành công');
    });
  }
}
