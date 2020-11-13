import React from 'react'
import { Input } from 'components/core'
import { Grid } from '@material-ui/core'
import FeedbackIcon from '@material-ui/icons/Feedback'
import Tooltip from '@material-ui/core/Tooltip'

function Equipment({}) {
  return (
    <div className="Ingredients">
      <div className="title">
        <div>
          <h3>Equipment</h3>
          <p>Click on the ! to see more comments</p>
        </div>
      </div>
      <div className="measurements">
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} sm={3}></Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="1" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <p>Stand Mixer</p>
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Tooltip title="Message comment" arrow>
              <FeedbackIcon style={{ margin: 'auto' }} />
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} sm={3}></Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="1" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <p>Saran/Plastic Wrap</p>
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Tooltip title="Message comment" arrow>
              <FeedbackIcon style={{ margin: 'auto' }} />
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} sm={3}></Grid>
          <Grid item md={3} lg={3} sm={3}>
            <Input type="text" value="1" className="input-ingredients" />
          </Grid>
          <Grid item md={3} lg={3} sm={3}>
            <p>Silicon Scraper</p>
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

export default Equipment
