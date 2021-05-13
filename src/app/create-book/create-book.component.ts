import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formCreate: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createNewBook() {
    const newBook = this.formCreate.value;
    this.bookService.createNewBook(newBook).subscribe(() => {
        alert('Tạo thành công');
        this.formCreate.reset();
    });
  }
}
