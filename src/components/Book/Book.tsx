import { observer } from 'mobx-react';
import './Book.scss'


const Book = observer(({ book, clickOnBook }: any) => {
	const { authors, categories, title, } = book?.volumeInfo;

	return (
		<div className="books__book" onClick={() => clickOnBook(book)}>
			<div className="books__book-image">
				<img
					src={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : ''}
					alt={title}
					style={{ width: "128px", height: "182px" }} />
			</div>
			<span className="books__book-category">
				{categories ? categories : ''}
			</span>
			<h4 className="books__book-title">
				{title ? title : ''}
			</h4>
			<p className="books__book-author">
				{authors ? authors.join(', ') : ''}
			</p>
		</div>
	)
})

export default Book;