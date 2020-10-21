import React, { useState, useEffect } from "react";
import Card from "components/Cards/card.jsx";

const Books = () => {
    const [books, setBooks] = useState([]);

    const FetchingBooks = () => {
        let url = "https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.books[0]);
            })

    }

    useEffect(() => {
        FetchingBooks();
    }, []);

    if (!books) {
        return <p>Chargement des données...</p>
    }

    return (
        <div>
            {books.map(({ title, shortDescription, thumbnailUrl }) => (
                <Card title={title} shortDescription={shortDescription} thumbnailUrl={thumbnailUrl} />

            )
            )}
        </div>

    )
}

export default Books;