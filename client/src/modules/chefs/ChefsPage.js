import React from 'react'
import { ListChefs } from './components'

function ChefsPage() {
  const listChefs = [
    {
      id: 1,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 2,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 3,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 4,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 5,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 6,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 7,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 8,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 9,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
    {
      id: 10,
      imageChef: '/images/chef/imageChef.jpg',
      author: 'mattymatt',
      numberPoint: '22.2k',
    },
  ]

  return (
    <div className="ListChefsContent">
      <ListChefs listChefs={listChefs} />
    </div>
  )
}

export default ChefsPage
