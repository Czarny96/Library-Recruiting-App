import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-add-data',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddDataComponent {
  private httpClient: HttpClient;
  router: Router;
  baseAPIUrl: string;

  public bookTitle = '';
  public bookIsbn = '';

  constructor(http: HttpClient, route: ActivatedRoute, router: Router, @Inject('BASE_API_URL') baseAPIUrl: string) {
    this.httpClient = http;
    this.router = router;
    this.baseAPIUrl = baseAPIUrl;
  }

  add() {

    this.httpClient.post<Books>(this.baseAPIUrl + 'api/books/', { title: this.bookTitle, isbn: this.bookIsbn })
      .subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      })

    this.router.navigate(['book-list']);
  }
}

interface Books {
  id: number;
  title: string;
  isbn: number;
}
