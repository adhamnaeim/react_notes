import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = () => {
  let navigate = useNavigate()
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

  let updateNote = async () => {
    await fetch(`http://localhost:1337/notes/${noteId}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated':new Date()})
    })
  }

  let deleteNote = async () => {
    await fetch(`http://localhost:1337/notes/${noteId}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/')
  }

  return (
    <div className='note'>
      
      <div className='note-header'>

        <h3>
          <Link to='/'>
            <ArrowLeft onClick={handleSubmit}/>
          </Link>
        </h3>

        <button onClick={deleteNote}>
          DELETE
        </button>

      </div>

      <h1>this is a single note page no.{note?.id}</h1>
      <h3>note body details</h3>
      <textarea onChange={(e)=> (setNote({...note,'body':e.target.value}))} className='NoteTextBox' value={note?.body}>


      </textarea>
    </div>
  )
}

export default NotePage