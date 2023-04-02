import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IBook } from '../types/bookTypes'


class Book {
	book: IBook = {};
	loading: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	getBook = (paramsId: any): void => {
		this.loading = true;
		axios.get<IBook>(`https://www.googleapis.com/books/v1/volumes/${paramsId}`)
			.then(request => {
				this.book = { ...request.data }
			})
		this.loading = false;
	}
}
const bookData = new Book();
export default bookData;