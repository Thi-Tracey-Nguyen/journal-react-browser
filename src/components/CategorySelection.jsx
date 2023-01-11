import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = () => {
  const [categories, setCategories] = useState([])

  // fetch categories from the api
  useEffect(async () => {
    const res = await fetch('http://localhost:4001/categories')
    const data = await res.json()
    setCategories(data)
  }, [])

  return (
    <>
      <h2>Please select a category:</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/entry/new/${cat.name}`}>{cat.name}</Link>
          </li>
          ))}
      </ul>
    </>
  )
}

export default CategorySelection