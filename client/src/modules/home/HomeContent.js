import React from 'react'
import { OptionSelectBar, ListFood } from './components'

export default function HomeContent() {
  const listFood = [
    {
      id: 1,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 2,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 3,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 4,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 5,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 6,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 7,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 8,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 9,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 10,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 11,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
    {
      id: 12,
      imageFood: '/images/home/imageFood.jpg',
      imageAvatar: '/images/home/avatar-author.png',
      author: 'mattymatt',
      numberPoint: '22.2k',
      numberChef: '312',
    },
  ]
  return (
    <div className="HomeContent">
      <div className="HomeContent__OptionSelectBar">
        <OptionSelectBar />
      </div>
      <div className="HomeContent__ListFood">
        <ListFood listFood={listFood} />
      </div>
    </div>
  )
}
