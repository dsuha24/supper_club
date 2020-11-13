import React from 'react'

export default function FoodItem({
  imageFood,
  imageAvatar,
  author,
  numberPoint,
  numberChef,
}) {
  return (
    <div className="FoodItem">
      <img className="food-image" src={imageFood} alt={imageFood} />
      <div className="information">
        <div className="information-auth">
          <img className="author-avatar" src={imageAvatar} alt={imageAvatar} />
          <p>{author}</p>
        </div>
        <div className="information-view">
          <p>{numberPoint} points</p>
          <p className="chefs">{numberChef} Chefs</p>
        </div>
      </div>
    </div>
  )
}
