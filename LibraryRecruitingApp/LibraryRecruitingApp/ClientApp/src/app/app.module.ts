import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BookListDataComponent } from './book-list/book-list.component';
import { BookDetailsDataComponent } from './book-details/book-details.component';
import { BookAddDataComponent } from './book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BookListDataComponent,
    BookDetailsDataComponent,
    BookAddDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'book-list', pathMatch: 'full' },
      { path: 'book-list', component: BookListDataComponent },
      { path: 'book-details/:id', component: BookDetailsDataComponent },
      { path: 'book-add', component: BookAddDataComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
