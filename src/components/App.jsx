import React, { useState } from 'react'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import ShowEntry from './ShowEntry'

const seedEntries = [
  {category: 'Food', content: 'Pizza'},
  {category: 'Book', content: 'All the light we cannot see'},
  {category: 'Work', content: 'React BrowserRouter'}
]

const App = () => {

  const [entries, setEntries] = useState(seedEntries)
  const nav = useNavigate()
  // HOC
  const ShowEntryWrapper = () => {
    const {id} = useParams()
    const entry = entries[id]
    return entry ? <ShowEntry entry={entry} /> : <h4>Entry not found</h4>
  }

  const addEntry = (category, content) => {
    alert('Entry added successfully')
    const id = entries.length

    // Add a new entry
    const newEntry = {
      category: category,
      content: content
    }
    setEntries([...entries, newEntry])
    nav(`/entry/${id}`)
}

  return (
    <>
      <NavBar />
      <Routes> 
        <Route path='/' element={<Home entries={entries}/>} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path='/entry/:id' element={<ShowEntryWrapper />} />
        <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry} />} />
        <Route path='*' element={<h4>Page Not Found</h4>} />
      </Routes>
    </>
  )
}

export default App