import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Books } from './shared/books.model';
import { BooksService } from './shared/books.service';
import { BookFilter } from '../book-filters/shared/book-filters.model';
import { EmitterService, EmmitterConstants} from '../shared/index';

@Component({
	selector: 'books',
	templateUrl: 'books.component.html',
	styleUrls: ['./books.component.scss'],
	providers: [BooksService],
})

export class BooksComponent implements OnInit, OnChanges{
	books: Books[] = [];
	filters:BookFilter={
		pageSize:"100",
		pageNumber:1,
		sortBy:'',
		searchText:''
	}
	searchObservable:any;
	@Input() set sortBy(value:string){
		console.log("Hereeeee" + value);
		 this.filters.sortBy=value;
	}

	constructor(private booksService: BooksService,
	private emitterService:EmitterService) { }

	ngOnInit() {
		console.log("Books component");
		this.UpdateList() ;
		this.searchObservable= this.emitterService.get(EmmitterConstants.SEARCHTEXT_CHANGE)
		.subscribe(SearchText=>{
			if(this.filters.searchText===SearchText) return false;
			this.filters.searchText=SearchText;
			this.UpdateList();
		});

	}
	ngOnChanges(){
		this.UpdateList() ;
	}
	UpdateList() {
		this.booksService.getList(this.filters).subscribe((res) => {
			this.books = res;
		});
	}
}