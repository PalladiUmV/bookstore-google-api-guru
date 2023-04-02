import { observer } from 'mobx-react-lite';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';

import "./BookPage.scss";
import bookStore from '../../store/bookStore'

const BookPage = observer(() => {
	const params = useParams();
	const { book, loading, getBook } = bookStore;

	useEffect(() => {
		getBook(params.id);
	}, []);

	return (
		<>
			{
				loading ?
					<div style={{ color: 'black', fontSize: '40px', fontWeight: 'bold' }}>
						<CircularProgress color="secondary" />
					</div>
					: (
						<div className='book'>
							<div className="book__image">
								<img
									src={book?.volumeInfo?.imageLinks?.thumbnail ?? ''}
									alt="" width="300px" height="400px" />
							</div>
							<div className='book__info'>
								<span className='book__category'>
									{book?.volumeInfo?.categories ?? ''}
								</span>
								<div className="book__title">{book?.volumeInfo?.title ?? ''} <br />
									<span className="book__author">{book?.volumeInfo?.authors ? book.volumeInfo.authors.join(', ') : ''}</span>
								</div>
								<div className="book__description">{book?.volumeInfo?.description ?? ''}</div>
							</div>
						</div>
					)
			}
		</>
	)
});
export default BookPage;