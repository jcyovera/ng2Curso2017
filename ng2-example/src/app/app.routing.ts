import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksManagerComponent } from './books-manager/books-manager.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'books', component: BooksManagerComponent}
];

export const routing = RouterModule.forRoot(routes);
