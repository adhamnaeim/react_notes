import React from 'react'
import { useParams } from 'react-router-dom';
import notes from '../assets/data'


const NotePage = () => {
  let { noteId } = useParams()
  let note = notes.find(note => note.id === Number(noteId))
  return (
    <div className='NotePage'>
        <h1>this is a single note page no.{note?.id}</h1>
        <h3>note body details</h3>
        <p>{note?.body}</p>
    </div>
  )
}

export default NotePage