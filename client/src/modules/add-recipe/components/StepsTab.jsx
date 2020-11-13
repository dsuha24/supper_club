import React from 'react'
import { FormItem } from 'components/core/Form'
import { useForm } from 'react-hook-form'
import { Input, TextArea, Button } from 'components/core'
import AuthLayout from 'modules/auth/AuthLayout'
import { Grid } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

function StepsTab() {
  const { register, errors } = useForm()

  return (
    <div className="StepsTab">
      <AuthLayout>
        <div className="LoginForm">
          <div
            className="form-group form-group-steps"
            style={{ maxWidth: '100%' }}
          >
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="text"
                label="Step1"
                placeholder="Short description"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <TextArea
                rows={4}
                cols={50}
                name="email"
                type="email"
                label=" "
                placeholder="Long description"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="text"
                label=" "
                placeholder="Add Ingredient"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="text"
                label=" "
                placeholder="Add Equipment"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <FormItem hasError={errors.email}>
              <Input
                name="email"
                type="file"
                label=" "
                placeholder="Add a short and clear name"
                inputRef={register({ required: true })}
              />
            </FormItem>
            <Grid container spacing={2}>
              <Grid item md={2} lg={2} sm={2} xs={0}>
                {' '}
              </Grid>
              <Grid item md={10} lg={10} sm={10} xs={12}>
                <div className="form-item form-submit">
                  <Button type="submit" className="save-btn btn-step">
                    Save
                  </Button>
                  <Button type="submit" className="submit-btn btn-step">
                    Submit Recipe
                  </Button>
                </div>
              </Grid>
            </Grid>
            <div className="icon-add">
              <AddCircleOutlineIcon
                style={{ fontSize: 40, color: '#07C400', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </AuthLayout>
    </div>
  )
}

export default StepsTab
