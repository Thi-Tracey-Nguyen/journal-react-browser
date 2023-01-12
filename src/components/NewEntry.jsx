import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ addEntry }) => {

  const { category } = useParams()
  const [entry, setEntry] = useState('')

  const handleChange = ({ target }) => setEntry(target.value)

  function handleSubmit(event) {
    event.preventDefault()
    addEntry(category, entry)
  }

  return (
    <>
    <h2>New Entry {category} category</h2>
    <form className='container' onSubmit={handleSubmit}>
      <div>
        <textarea className='form-control' rows='10' value={entry} onChange={handleChange}></textarea>
      </div>
      <button className='btn btn-primary mt-2' type='submit'>Create entry</button>
    </form>
    </>
  )
}

export default NewEntry