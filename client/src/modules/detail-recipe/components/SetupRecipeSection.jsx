import React from 'react'
import CommonRecipe from './CommonRecipe'
import Ingredients from './Ingredients'
import Equipment from './Equipment'
import StepRecipe from './StepRecipe'

function SetupRecipeSection() {
  return (
    <div className="SetupRecipeSection">
      <CommonRecipe />
      <hr />
      <Ingredients />
      <hr />
      <Equipment />
      <hr />
      <StepRecipe />
    </div>
  )
}

export default SetupRecipeSection
