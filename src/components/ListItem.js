/**
 * this child component is responsible for each noteItem rendered inside the NotesListPage parent component
 */
import React from 'react'
import {Link} from 'react-router-dom'

let getTitle = (note) => {
  /**
   * fetches the notes's body and splits on the first whitespace
   * if the splitted string is longer than 50 char, slice and add trailing dots to it
   */
  const title = note.body.split('\n')[0]

  if (title.length >= 50){
    return title.slice(0,50)+'...'
  }
  return title
}

let getDate = (note) => {
  /**
   * fetches note's updated date and converts it to localDateString, human readable.
   */
  return new Date(note.updated).toLocaleDateString()
}

let getShortBody = (note) => {
  /**
   * similar to getTitle, remove splits the note's body by white space and slices
   * slices the splitted array from the 1st index (the title)
   * joins the sliced array and slices it to 50 char only if longer while adding trailing dots
   */
  const shortBody =  note.body.split('\n').slice(1).join('')
  
  if (shortBody.length >= 50){
    return shortBody.slice(0,50)+'...'
  }
  return shortBody
}

let getNoteBody
const ListItem = ({note}) => {
  return (
    <li className='ListItem'>
      <div className='notes-list-item'>
        <Link to={`/note/${note.id}`}>
          <h3>{getTitle(note)}</h3>
          {/* if condition: if there is a body to the note other than the title, display it */}
          {getShortBody(note) !== '' && (
            <p><span>{getShortBody(note)}</span></p>
          )}
          {/* displays date and time using getDate function and by spliting the updated key for the note from 'T' */}
          <p><span>{getDate(note)} {note.updated.split('T')[1].slice(0,-5)}</span></p>
        </Link>
      </div>
    </li>
  )
}

export default ListItem
