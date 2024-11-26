import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SearchProduct() {
    const data = useLoaderData()

    console.log(data)
    
  return (
    <div>SearchProduct</div>
  )
}

export default SearchProduct