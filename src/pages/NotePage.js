import React from 'react'
import { useParams } from 'react-router-dom';
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = () => {
  let { noteId } = useParams()

  let note = notes.find(note => note.id === Number(noteId))

  return (
    <div className='note'>
      
      <div className='note-header'>

        <h3>
          <Link to='/'>
            <ArrowLeft/>
          </Link>
        </h3>

      </div>

      <h1>this is a single note page no.{note?.id}</h1>
      <h3>note body details</h3>
      <p>{note?.body}</p>
    </div>
  )
}

export default NotePage