import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookDataService {
  private bookService = 'http://localhost:4730';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(`${this.bookService}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get(`${this.bookService}/books/${isbn}`);
  }

  updateBook(book: Book): void {
    this.http.put(`${this.bookService}/books/${book.isbn}`, book).subscribe();
  }

  createBook(book: Book): void {
    this.http.post(`${this.bookService}/books`, book).subscribe();
  }
}
