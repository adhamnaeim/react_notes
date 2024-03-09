import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
  return (
    <div className='NotesListPage'>
        <p>notes list feed --NotesListPage.js--</p>
        <ul className='notes-list'>
            {/* for note in notes */}
            {notes.map((note,index) => (
                <>
                    {/* since ListItem requires props, we have to pass some arguments */}
                    <ListItem key={index} note={note}/>
                </>
            ))}
        </ul>
    </div>
  )
}

export default NotesListPage
