import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListDataComponent {
  public books: Books[] = [];
  private httpClient: HttpClient;
  page = 1;
  router: Router;
  baseAPIUrl: string;

  constructor(http: HttpClient, router: Router, @Inject('BASE_API_URL') baseAPIUrl: string) {
    this.httpClient = http;
    this.router = router;
    this.baseAPIUrl = baseAPIUrl;

    http.get<Books[]>(this.baseAPIUrl + 'api/books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }

  searchMetchod(event: KeyboardEvent) {
    const search = event.target as HTMLInputElement;

    if (search.value.length === 0)
      this.httpClient.get<Books[]>(this.baseAPIUrl + 'api/books').subscribe(result => {
        this.books = result;
      }, error => console.error(error));
    else
      this.httpClient.get<Books[]>(this.baseAPIUrl + 'api/books/search/' + search.value).subscribe(result => {
        this.books = result;
      }, error => console.error(error));
  }

  onSelect(id: number) {
    this.router.navigate(['book-details', id]);
  }

}

interface Books {
  id: number;
  title: string;
  isbn: number;
}
