import { observer } from "mobx-react-lite";

import './SearchPanel.scss'
import booksData from '../../store/booksStore';

const SearchPanel = observer(() => {

    const { getInputValue, fetchBooks, getSortStatus, getCategory } = booksData;

    return (
        <div className="filter-panel">
            <h3 className="filter-panel__title">Поиск по книге</h3>
            <input className="filter-panel__search-input" type="text" onChange={(e) => getInputValue(e.target.value)} onKeyDown={(e) => {
                if (e.key === 'Enter') fetchBooks();
            }} />
            <button className="filter-panel__search-button" onClick={fetchBooks}>Поиск</button>
            <div className="filter-panel__selects">
                <label>
                    Categories
                    <select onChange={(e) => getCategory(e.target.value)} defaultValue="all">
                        <option value="all">all</option>
                        <option value="Art">art</option>
                        <option value="Biography">biography</option>
                        <option value="Computers">computers</option>
                        <option value="History">history</option>
                        <option value="Medical">medical</option>
                        <option value="Poetry">poetry</option>
                    </select>
                </label>
                <label>
                    Sorting by
                    <select defaultValue={'relevance'} onChange={(e) => getSortStatus(e.target.value)}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </label>
            </div>
        </div>
    );
});

export default SearchPanel;