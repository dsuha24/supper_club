import React from 'react'
import { Grid } from '@material-ui/core'
import FoodItem from './FoodItem'
import { Link } from 'react-router-dom'

export default function ListFood({ listFood }) {
  return (
    <div className="ListFood">
      <Grid container spacing={2}>
        {listFood.map((item) => (
          <Grid key={item.id} item md={4} lg={3} sm={6}>
            <Link to={`/recipe/${item.id}`}>
              <FoodItem
                imageFood={item.imageFood}
                imageAvatar={item.imageAvatar}
                author={item.author}
                numberPoint={item.numberPoint}
                numberChef={item.numberChef}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
