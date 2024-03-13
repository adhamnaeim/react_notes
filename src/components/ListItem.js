import React from 'react'
import {Link} from 'react-router-dom'

let getTitle = (note) => {
  const title = note.body.split('\n')[0]

  if (title.length >= 50){
    return title.slice(0,50)+'...'
  }
  return title
}

let getDate = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

let getShortBody = (note) => {
  const shortBody =  note.body.split('\n').slice(1).join('').slice(0,50)
  
  if (shortBody.length >= 50){
    return shortBody.slice(0,50)+'...'
  }
  return shortBody
}

let getNoteBody
//props passes immutable object()
const ListItem = ({note}) => {
  return (
    <li className='ListItem'>
      <div className='notes-list-item'>
        <Link to={`/note/${note.id}`}>
          <h3>{getTitle(note)}</h3>
          {getShortBody(note) !== '' && (
            <p><span>{getShortBody(note)}</span></p>
          )}
          <p><span>{getDate(note)} {note.updated.split('T')[1].slice(0,-5)}</span></p>
        </Link>
      </div>
    </li>
  )
}

export default ListItem
