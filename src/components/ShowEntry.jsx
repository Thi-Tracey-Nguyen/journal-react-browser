import React from 'react'
import { useParams } from 'react-router-dom'

const ShowEntry = ({ entries }) => {

  const {id} = useParams()

  return entries[id] ? (
    <>
        <h5>{entries[id].content}</h5>
        <p>Posted in {entries[id].category}</p>
    </>
  ) : (
    <h4>Entry not found</h4>
  )
}

export default ShowEntry