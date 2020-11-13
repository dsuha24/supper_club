import React from 'react'
import { FormItem } from 'components/core/Form'
import { useForm } from 'react-hook-form'
import { Input, TextArea, Button } from 'components/core'
import AuthLayout from 'modules/auth/AuthLayout'
import { Grid } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

function MissEnTab() {
  const { register, errors } = useForm()

  return (
    <div className="MissEnTab">
      <AuthLayout>
        <div className="LoginForm">
          <div className="form-group" style={{ maxWidth: '100%' }}>
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="text"
                label="Title"
                placeholder="Add a short and clear name"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <TextArea
                name="email"
                type="text"
                label="Description"
                rows={4}
                cols={50}
                placeholder="Add a longer description of the dish"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="file"
                label="Images"
                placeholder=""
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="cuisine"
                type="text"
                label="Cuisine"
                placeholder="Add a short and clear name"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="cooking"
                type="text"
                label="Cooking"
                placeholder="Add a short and clear name"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="Servings"
                type="text"
                label="Servings"
                placeholder="Qty"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <div className="equipment">
                <Input
                  name="ingredients"
                  type="text"
                  label="Ingredients"
                  placeholder="Add a short and clear name"
                  inputRef={register({ required: true })}
                />
                <AddCircleOutlineIcon className="add-icon icon" />
                <ErrorOutlineIcon className="err-icon icon" />
              </div>
            </FormItem>
            <FormItem hasError={errors.email}>
              <div className="equipment">
                <Input
                  name="equipment"
                  type="text"
                  label="Equipment"
                  placeholder="Add a short and clear name"
                  inputRef={register({ required: true })}
                />
                <AddCircleOutlineIcon className="add-icon icon" />
                <ErrorOutlineIcon className="err-icon icon" />
              </div>
            </FormItem>
            <Grid container spacing={2}>
              <Grid item md={2} lg={2} sm={2} xs={0}>
                {' '}
              </Grid>
              <Grid item md={10} lg={10} sm={10} xs={12}>
                <div className="form-item form-submit">
                  <Button type="submit" className="save-btn btn-step">
                    Next
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </AuthLayout>
    </div>
  )
}

export default MissEnTab
