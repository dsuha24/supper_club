import React from 'react'
import { Grid } from '@material-ui/core'
import DetailProfile from './components/DetailProfile'
import ListRecipes from './components/ListRecipes'

function Profile() {
  return (
    <div className="Profile">
      <Grid container spacing={2}>
        <Grid item md={3} lg={3} sm={4}>
          <DetailProfile />
        </Grid>
        <Grid item md={9} lg={9} sm={8}>
          <ListRecipes />
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile
