import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function ListRecipesTab({ listRecipes }) {
  return (
    <div className="ListFood">
      <Grid container spacing={2}>
        {listRecipes.map((item) => (
          <Grid key={item.id} item md={4} lg={4} sm={6}>
            <Link to={`/recipe/${item.id}`}>
              <img
                style={{ width: '100%' }}
                src={item.image}
                alt={item.image}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
