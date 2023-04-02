import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IBook } from "../types/bookTypes";

class Books {
	books: IBook[] = [];
	inputValue: string = 'js';
	sortBy: string = 'relevance';
	category: string = 'all'
	totalItems: number = 0;
	startIndex: number = 0;
	loading: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	getInputValue = (inputValue: string): void => {
		this.inputValue = inputValue;
	}
	getSortStatus = (sortValue: string): void => {
		this.sortBy = sortValue;
	}
	getCategory = (category: string): void => {
		this.category = category;
	}




	fetchBooks = async () => {
		// REACT_APP_MY_API_KEY = 'AIzaSyBbUHmS9k4Wp-5_G651d9xYYL9ROpEDObg' - ключ
		this.loading = true;
		this.books = []
		this.startIndex = 0;
		const request = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${this.inputValue}+subject:${this.category === 'all' ? '' : this.category}&orderBy=${this.sortBy}&key=${process.env.REACT_APP_MY_API_KEY}&startIndex=0&maxResults=30`)
		this.books = [...this.books, ...request.data.items]
		this.totalItems = request.data.totalItems;
		this.loading = false;
	}

	loadMoreBooks = async () => {
		this.startIndex += 31;
		const request = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${this.inputValue}+subject:${this.category === 'all' ? '' : this.category}&orderBy=${this.sortBy}&key=${process.env.REACT_APP_MY_API_KEY}&startIndex=${this.startIndex}&maxResults=30`)
		this.books = [...this.books, ...request.data.items]
	}
}

const booksStore = new Books();
export default booksStore;