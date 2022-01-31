import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'Important' : 'Not important'

  const buttonClass = note.important
    ? 'button-important' : 'button-unimportant'

  return (
    <li className='note'>
      <span>{note.content}</span>
      <button className={buttonClass} onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note