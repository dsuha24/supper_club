import React from 'react'
import { MultiSelect } from 'components/core'
import { Grid } from '@material-ui/core'

export default function OptionSelectBar() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <div className="OptionSelectBar">
      <Grid container spacing={5}>
        <Grid item md={4} sm={12} lg={4} xs={12}>
          <MultiSelect options={options} name="firt-select" defaultValue={[]} />
        </Grid>
        <Grid item md={4} sm={12} lg={4} xs={12}>
          <MultiSelect
            options={options}
            name="second-select"
            defaultValue={[]}
          />
        </Grid>
        <Grid item md={4} sm={12} lg={4} xs={12}>
          <MultiSelect
            options={options}
            name="finally-select"
            defaultValue={[]}
          />
        </Grid>
      </Grid>
    </div>
  )
}
