import React from 'react'
import { Grid } from '@material-ui/core'
import ChefItem from './ChefItem'

export default function ListChefs({ listChefs }) {
  return (
    <div className="ListChefs">
      <Grid container spacing={2}>
        {listChefs.map((item) => (
          <div key={item.id} className="itemChef">
            <ChefItem
              imageChef={item.imageChef}
              author={item.author}
              numberPoint={item.numberPoint}
            />
          </div>
        ))}
      </Grid>
    </div>
  )
}
