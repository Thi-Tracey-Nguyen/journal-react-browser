import React, { useState, useEffect } from 'react'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import ShowEntry from './ShowEntry'


const App = () => {

  const [entries, setEntries] = useState([])
  const nav = useNavigate()

  const [categories, setCategories] = useState([])

  // fetch categories from the api
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch('https://mongodb-intro-production.up.railway.app/categories')
      const data = await res.json()
      setCategories(data)
    }
    fetchCategories() 
  }, [])

  // fetching seed entries from database
  useEffect(() => {
    async function fetchEntries() {
      const res = await fetch('https://mongodb-intro-production.up.railway.app/entries/')
      const data = await res.json()
      setEntries(data)
    }
    fetchEntries()
  }, []) // [] is the 'dependencies list', empty means only on mount

  // HOC
  const ShowEntryWrapper = () => {
    const {id} = useParams()
    const entry = entries[id]
    return entry ? <ShowEntry entry={entry} /> : <h4>Entry not found</h4>
  }

  const addEntry = async (category, content) => {
    alert('Entry added successfully')
    const id = entries.length

    // Retrieve the category obj that matches the category in the params
    // const categoryObject = categories.find(cat => cat.name === category)
    // Add a new entry
    const newEntry = {
      category: category,
      content: content
    }

    // Post the new entry to the API
    const returnedEntry = await fetch('https://mongodb-intro-production.up.railway.app/entries/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(newEntry)
    })
    const data = await returnedEntry.json()
    setEntries([...entries, data])
    nav(`/entry/${id}`)
}

  return ( // needs parentheses because it is multi-lined 
    <>
      <NavBar />
      <Routes> 
        <Route path='/' element={<Home entries={entries}/>} />
        <Route path='/category' element={<CategorySelection categories={categories}/>} />
        <Route path='/entry/:id' element={<ShowEntryWrapper />} />
        <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry} />} />
        <Route path='*' element={<h4>Page Not Found</h4>} />
      </Routes>
    </>
  )
}

export default App


