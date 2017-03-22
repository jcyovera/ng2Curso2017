import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Books } from './books.model';

@Injectable()
export class BooksService {

	constructor(private http: Http) { }

	getList(): Observable<Books[]> {
		return this.http.get('http://localhost:3000/books').map(res => res.json() as Books[]);
	}
}