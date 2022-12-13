import React, { useState } from 'react'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowEntry from './ShowEntry'

const App = () => {

  const [entries, setEntries] = useState([])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<CategorySelection />} />
          <Route path='/entry/:id' element={<ShowEntry entries={entries} />} />
          <Route path='/entry/new/:category' element={<NewEntry setEntries={setEntries} entries={entries} />} />
          <Route path='*' element={<h4>Page Not Found</h4>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App