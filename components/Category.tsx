import React from 'react'

const Category = ( {category}: CategoryProps) => {
    
  return (
    <div>{category.name}</div>
  )
}

export default Category