import { Component, OnInit } from '@angular/core';

import { Books } from './shared/books.model';
import { BooksService } from './shared/books.service';

@Component({
	selector: 'books',
	templateUrl: 'books.component.html',
	styleUrls: ['./books.component.scss'],
	providers: [BooksService],
})

export class BooksComponent implements OnInit {
	books: Books[] = [];

	constructor(private booksService: BooksService) { }

	ngOnInit() {
		console.log("Books component");
		this.booksService.getList().subscribe((res) => {
			this.books = res;
		});
	}
}