import React, { useState, useEffect } from 'react'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import ShowEntry from './ShowEntry'

const seedEntries = [
  {category: 'Food', content: 'Pizza'},
  {category: 'Coding', content: 'React is awesome!'},
  {category: 'Work', content: 'Another day, another dollar'}
]

const App = () => {

  const [entries, setEntries] = useState([])
  const nav = useNavigate()

  // fetching seed entries from database
  useEffect(async () => {
    const res = await fetch('http://localhost:4001/entries/')
    const data = await res.json()
    setEntries(data)
  }, []) // [] is the 'dependencies list', empty means only on mount

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

  return ( // needs parentheses because it is multi-lined 
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