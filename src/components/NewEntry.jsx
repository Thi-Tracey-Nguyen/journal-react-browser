import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ addEntry }) => {

  const { category } = useParams()
  const [entry, setEntry] = useState('')

  const handleChange = ({target}) => setEntry(target.value)

  function handleSubmit(event) {
    event.preventDefault()
    addEntry(category, entry)
    // alert('Entry added successfully')
    // const id = entries.length

    // // Add a new entry
    // const newEntry = {
    //   category: category,
    //   content: entry
    // }
    // setEntries([...entries, newEntry])
    // setEntry('')
    // nav(`/entry/${id}`)
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