import React from 'react'
import { Grid } from '@material-ui/core'
import { CommentSection, SetupRecipeSection } from './components'

function RecipeDetail() {
  return (
    <div className="RecipeDetail">
      <Grid container spacing={5}>
        <Grid
          item
          md={4}
          lg={4}
          sm={4}
          style={{ borderRight: '0.5px solid #707070' }}
        >
          <CommentSection />
        </Grid>
        <Grid item md={8} lg={8} sm={8}>
          <SetupRecipeSection />
        </Grid>
      </Grid>
    </div>
  )
}

export default RecipeDetail
