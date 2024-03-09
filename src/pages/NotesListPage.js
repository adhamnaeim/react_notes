import React from 'react'
import notes from '../assets/data'

const NotesListPage = () => {
  return (
    <div className='NotesListPage'>
        <p>notes list feed --NotesListPage.js--</p>
        <ul className='notes-list'>
            {/* for note in notes */}
            {notes.map(note => (
                <li>{note.body}</li>
            ))}
        </ul>
    </div>
  )
}

export default NotesListPage
