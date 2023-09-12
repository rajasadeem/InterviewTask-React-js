import React from 'react'

const Card = ( { name, price, description, category, rating }) => {
  return (
    <div>

    <h3>{name}</h3>
    <p>{description}</p>
    <p> Price : {price}</p>
    <p>Category : {category}</p>
    <p>Rating : {rating}</p>
      
    </div>
  )
}

export default Card
