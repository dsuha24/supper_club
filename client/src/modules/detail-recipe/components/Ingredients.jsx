import React from 'react'
import { Input } from 'components/core'
import { Grid } from '@material-ui/core'
import FeedbackIcon from '@material-ui/icons/Feedback'
import Tooltip from '@material-ui/core/Tooltip'

function Ingredients({}) {
  return (
    <div className="Ingredients">
      <div className="title">
        <div>
          <h3>Ingredients</h3>
          <p>click on the boxes to change the measurements</p>
        </div>
        <div className="servings">
          <h5>Servings</h5>
          <div>
            <Input
              name="email"
              value="8"
              type="text"
              className="input-ingredients"
            />
          </div>
        </div>
      </div>
      <div className="measurements">
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="8" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="tsp" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <p>Instant yeast</p>
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Tooltip title="Message comment" arrow>
              <FeedbackIcon style={{ margin: 'auto' }} />
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="1" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="cup" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <p>Water</p>
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Tooltip title="Message comment" arrow>
              <FeedbackIcon style={{ margin: 'auto' }} />
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="1" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="pc" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <p>Salt</p>
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Tooltip title="Message comment" arrow>
              <FeedbackIcon style={{ margin: 'auto' }} />
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Ingredients
