import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['Naruto'])

  //const handleAdd = () => {
  //Solucion 1
  //setCategories([...categories, 'HunterXhunter'])
  //Solucion 2
  //setCategories((cats) => [...cats, 'HunterXhunter'])
  //}

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}
