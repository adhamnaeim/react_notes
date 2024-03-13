/**
 * responsible for fetching the notes from the db.json and loading them through a mapping function
 * this component usesstate and useeffect hooks for fetching data from the json-server asynchronously
 */
import React, {useEffect, useState} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

  let [notes,setNotes] = useState([])
  
  useEffect(() => {
    getNotes()
  },[])

  let getNotes = async () => {
    let response = await fetch('http://localhost:1337/notes')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div className='notes'>
      
      <div className='notes-header'>
        <p className='notes-count'>notes: {notes.length}</p>
        <h2 className='notes-title'>&#9782; Notes</h2>
      </div>

      <ul className='notes-list'>
        {/* for note in notes */}
        {notes.map((note,index) => (
        <>
          {/* since ListItem requires props, we have to pass some arguments */}
          <ListItem key={index} note={note}/>
        </>
        ))}
      </ul>

      <AddButton/>
    </div>
  )
}

export default NotesListPage
