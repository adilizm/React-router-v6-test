import React from 'react'
import { Outlet } from 'react-router-dom'

function BooksHead() {
  return (
   <>
   <Outlet context={{name:"adil"}} />
    <div>
        <ul style={{display:"flex",marginLeft:'10px'}}>
            <li style={{marginLeft:'10px'}}><a>Create new</a></li>
            <li style={{marginLeft:'20px'}}><a>more info</a></li>
        </ul>
    </div>
    
    </>
  )
}

export default BooksHead