import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  formEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  book: Book;
  id = -1;

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
      this.formEdit = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }

  editBook(id) {
    const book = this.formEdit.value;
    this.bookService.editBook(id, book).subscribe(() => {
      alert('Sửa thành công');
    });
  }
}
