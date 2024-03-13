import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = () => {
  let { noteId } = useParams()
  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    let response = await fetch(`http://localhost:1337/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

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
      <textarea className='NoteTextBox' value={note?.body}>


      </textarea>
    </div>
  )
}

export default NotePage