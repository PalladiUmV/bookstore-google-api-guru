import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import BookPage from "../BookPage/BookPage";
import SearchPanel from "../SearchPanel/SearchPanel";

import { useEffect } from "react";

import { observer } from 'mobx-react-lite';


import booksData from '../../store/booksStore';

const App = observer(() => {
  useEffect(() => {
    booksData.fetchBooks();
  }, [])

  return (
    <>
      <SearchPanel />
      <Routes>
        <Route
          path="/"
          element={<Navigate to='/bookstore-googleapi' replace />}
        />
        <Route path="/bookstore-googleapi" element={<Homepage />} />
        <Route path="/bookstore-googleapi/:id" element={<BookPage />} />
      </Routes>
    </>
  );
})

export default App;
