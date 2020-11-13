import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from 'components/core/TabPanel'
import EditIcon from '@material-ui/icons/Edit'
import ListRecipesTab from './ListRecipesTab'

function ListRecipes() {
  const listRecipes = [
    {
      id: 1,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 2,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 3,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 4,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 5,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 6,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 7,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 8,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 9,
      image: '/images/home/imageFood.jpg',
    },
  ]
  const listRecipesSaved = [
    {
      id: 1,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 2,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 3,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 4,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 5,
      image: '/images/home/imageFood.jpg',
    },
    {
      id: 6,
      image: '/images/home/imageFood.jpg',
    },
  ]
  const [tabIndex, setTabIndex] = useState(0)
  const handleChangeTab = (_tab, i) => {
    setTabIndex(i)
  }

  return (
    <div className="ListRecipes">
      <div className="tab-title">
        <EditIcon
          style={{ color: '#6B6B6B', marginRight: 50, cursor: 'pointer' }}
        />
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
        >
          <Tab label="Recipes (51)" />
          <Tab label="Saved (254)" />
        </Tabs>
      </div>
      <div className="tab-content">
        <TabPanel value={tabIndex} index={0}>
          <ListRecipesTab listRecipes={listRecipes} />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <ListRecipesTab listRecipes={listRecipesSaved} />
        </TabPanel>
      </div>
    </div>
  )
}

export default ListRecipes
