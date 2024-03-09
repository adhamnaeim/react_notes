import React from 'react'
import { useParams } from 'react-router-dom';


const NotePage = () => {
    let { id } = useParams();
  console.log("id:::",id)
  return (
    <div className='NotePage'>
        <h1>this is a single note page</h1>
    </div>
  )
}

export default NotePage