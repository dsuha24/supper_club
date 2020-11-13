import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import { Grid } from '@material-ui/core'

function CommonRecipe({}) {
  return (
    <div className="CommonRecipe">
      <div className="title-common-recipe">
        <h1>CROISSANT X</h1>
        <div className="icon-common">
          <EditIcon />
          <CloseIcon style={{ marginLeft: 20 }} />
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} sm={6}>
          <h3>
            darylsuharli <sub>3-Star Michelin Bow Down</sub>
          </h3>
          <p>July 21, 2020 (Last revision 10/26/2020 - 3 total revisions)</p>
          <div className="national">
            <div className="pastry">PASTRY</div>
            <div className="french">FRENCH</div>
          </div>
          <img
            className="recipe-image"
            src="/images/recipe/2.png"
            alt="imageChef"
          />
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sm={6}
          style={{ position: 'relative', margiin: 'unset' }}
        >
          <div className="right-number">
            <div className="right-item-number">
              <p className="number">1</p>
              <p>Attempts</p>
            </div>
            <div className="right-item-number">
              <p className="number">185</p>
              <p>Saves</p>
            </div>
            <div className="right-item-number">
              <p className="number">567</p>
              <p>Chef &apos;s Kiss</p>
            </div>
          </div>
          <div className="image-recipe">
            <Grid container spacing={2}>
              <Grid item md={4} lg={4} sm={4}>
                <img
                  className="recipe-image common-image"
                  src="/images/recipe/1.png"
                  alt="imageChef"
                />
              </Grid>
              <Grid item md={4} lg={4} sm={4}>
                <img
                  className="recipe-image common-image"
                  src="/images/recipe/3.png"
                  alt="imageChef"
                />
              </Grid>
              <Grid item md={4} lg={4} sm={4}>
                <img
                  className="recipe-image common-image"
                  src="/images/recipe/4.png"
                  alt="imageChef"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CommonRecipe
