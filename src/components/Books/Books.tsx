import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import CircularProgress from '@mui/material/CircularProgress';


import "../Book/Book";
import Book from "../Book/Book";
import booksStore from '../../store/booksStore';

import { IBook } from '../../types/bookTypes'

export const Books = observer(() => {

    const { books, totalItems, loadMoreBooks, loading } = booksStore;

    const navigate = useNavigate();


    return (
        <>

            {
                loading ? (
                    <div style={{ margin: "40px auto", width: '40px' }}>
                        <CircularProgress color="secondary" />
                    </div>
                ) : (
                    <>
                        <h3 style={{ textAlign: 'center' }}>Found {totalItems} results</h3>
                        <div className="books">
                            {books?.map((book: IBook, index: number) => {
                                return (
                                    <Book clickOnBook={() => navigate('/bookstore-googleapi/' + (book.id))} book={book} key={`${book.id}` + index} />
                                )
                            })}
                        </div>
                        <div style={{ display: 'flex', justifyContent: "center" }}>
                            <button onClick={loadMoreBooks} style={{ marginTop: '20px', fontSize: 20 }}>Load More</button>
                        </div>
                    </>
                )}
        </>
    )
})
