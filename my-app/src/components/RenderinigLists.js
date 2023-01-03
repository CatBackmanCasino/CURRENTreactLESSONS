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
            title: "title 1",
            author: "author 1",
            pages: "pages 1"
        },
        {
            title: "title 2",
            author: "author 2",
            pages: "pages 2"
        },
        {
            title: "title 3",
            author: "author 3",
            pages: "pages 3"
        }
    ]

    return (
        <div>
            {booklist.map(book => {
                return <h2>{book}</h2>
            })}
            <hr />
            {
                books.map(title => {
                    return (
                        <div>
                            <h5>{title.title}</h5>
                            <p>{title.author}</p>
                            <p>{title.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book book={book} />
                })
            }

        </div>
    )
}

export default RenderinigLists