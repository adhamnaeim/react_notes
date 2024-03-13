/**
 * add the add.svg icon as an individual react component
 * unlike the arrow-left.svg that is import directly to NotePage.js
 */
import React from 'react'
import {ReactComponent as AddIcon} from '../assets/add.svg'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <AddIcon />
    </Link>
  )
}

export default AddButton
