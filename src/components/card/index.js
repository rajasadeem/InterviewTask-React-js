import React from 'react'

const Card = ({ name, price, description, category, rating, brand }) => {
  return (
    <div>

      <h3>{name}</h3>
      <p>{description}</p>
      <p> Price : {price}</p>
      <p>Category : {category}</p>
      <p>Brand : {brand}</p>
      <p>Rating : {rating}</p>
    </div>
  )
}

export default Card
