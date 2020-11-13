import React from 'react'
import { Grid } from '@material-ui/core'

function StepRecipe({}) {
  const ingredients = [
    { number: '1 cup', name: 'Water' },
    { number: '1 cup', name: 'Water' },
    { number: '1 cup', name: 'Water' },
    { number: '1 cup', name: 'Water' },
  ]
  const equipment = ['Stand Mixer', 'Silicon']
  return (
    <div className="StepRecipe">
      <h3>Step 1: Mix</h3>
      <p>
        Mix all dry ingredients first. Then slowly pour wet ingredients in the
        mixer at low level. Gradually increase to medium level for about 3-4
        minutes until the texture is nice and bouncy{' '}
      </p>
      <Grid container spacing={5}>
        <Grid item md={6} lg={6} sm={6}>
          <img
            className="recipe-image"
            src="/images/recipe/1.png"
            alt="imageChef"
          />
        </Grid>
        <Grid item md={6} lg={6} sm={6}>
          <div>
            <h4>Ingredients</h4>
            <ul className="list">
              {ingredients.map((item) => (
                <li key={item.name}>
                  {item.number}
                  <span> {item.name}</span>
                </li>
              ))}
            </ul>
            <h4>Equipment</h4>
            <ul className="list">
              {equipment.map((item) => (
                <li key={item}>
                  <span> {item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default StepRecipe
