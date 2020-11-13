import React from 'react'

export default function ChefItem({ imageChef, author, numberPoint }) {
  return (
    <div className="ChefItem">
      <img className="chef-image" src={imageChef} alt={imageChef} />
      <div className="information">
        <div className="information-auth">
          <p>{author}</p>
        </div>
        <div className="information-view">
          <p>{numberPoint} points</p>
        </div>
      </div>
    </div>
  )
}
