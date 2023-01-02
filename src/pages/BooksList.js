import { NavLink } from 'react-router-dom'

function BooksList() {
    let bookslist = [{id:1,title:"Sun in Morocco",pages:150},{id:2,title:"moon in Canada",pages:510}]
  return (
    <>
    <div>BooksList page</div>
    <ul>
            {bookslist.map(book=><li><NavLink to={`/books/${book.id}`}>{book.title}</NavLink></li>)} 
        </ul>
    </>
    
  )
}

export default BooksList