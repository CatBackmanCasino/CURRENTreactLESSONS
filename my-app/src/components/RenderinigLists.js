import React from 'react'
import Book from './Book'

function RenderinigLists() {
    const booklist = [
        "to kill a mockinbird",
        "the great gatsby",
        "the catcher in the rye"
    ]

    const books = [
        {
            title: "To Kill A Mockingbird",
            author: "Harper, Lee",
            pages: "281"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            pages: "218"
        },
        {
            title: "The Catcher In The Rye",
            author: "J. D. Salinger",
            pages: "234"
        }
    ]

    return (
        <div>
            {booklist.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div key={book.title}>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book 
                    key={book.title}
                    book={book} />
                })
            }

        </div>
    )
}

export default RenderinigLists