import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-details-data',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsDataComponent {
  public books: Books = { id: 0, title: '', isbn: 0 };
  private httpClient: HttpClient;
  router: Router;

  public bookTitle = '';
  public bookIsbn = 0;
  baseAPIUrl: string;

  constructor(http: HttpClient, route: ActivatedRoute, router: Router, @Inject('BASE_API_URL') baseAPIUrl: string) {
    let id = route.snapshot.params.id;
    this.httpClient = http;
    this.router = router;
    this.baseAPIUrl = baseAPIUrl;

    http.get<Books>(this.baseAPIUrl + 'api/books/' + id).subscribe(result => {
      this.books = result;
      this.bookTitle = this.books.title;
      this.bookIsbn = this.books.isbn;
    }, error => console.error(error));

  }

  update(id: number) {
    const body = { id: id, title: this.bookTitle, isbn: this.bookIsbn };

    this.httpClient.put<Books>(this.baseAPIUrl + 'api/books/', body)
      .subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });

    this.router.navigate(['book-list']);
  }

  remove(id: number) {
    this.httpClient.delete(this.baseAPIUrl + 'api/books/' + id)
      .subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });

    this.router.navigate(['book-list']);
  }
}

interface Books {
  id: number;
  title: string;
  isbn: number;
}
