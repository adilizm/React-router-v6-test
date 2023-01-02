import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Book() {
    let bookslist = [{id:1,title:"Sun in Morocco",pages:150},{id:2,title:"moon in Canada",pages:510}]
    let {id} = useParams();
    let the_book = bookslist.filter(book => book.id == id)
    let context = useOutletContext();
    useEffect(()=>{
        console.log('id = ',id)
        console.log('the_book = ',the_book)
    },[id])
  return (
    <>
    <div> {the_book.map(book=>
                        <div key={book.id}>
                            <div>Book id = <span key={book.id}>{book.id}</span></div> 
                            <div>Book title = <span key={book.id}>{book.title}</span></div> 
                            <div>Book pages = <span key={book.id}>{book.pages}</span></div>
                        </div>
                        )}
        <div>context name = {context.name}</div>
    </div>
    </>
  )
}

export default Book