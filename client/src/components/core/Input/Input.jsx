import React from 'react'
import { Grid } from '@material-ui/core'

export default function Input({ inputRef, label, helperText, ...props }) {
  return (
    <>
      {label ? (
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            lg={2}
            sm={4}
            xs={12}
            style={{ alignSelf: 'center' }}
          >
            <div className="input__label">
              <span>{label}</span>
            </div>
          </Grid>
          <Grid item md={9} lg={10} sm={8} xs={12}>
            <div>
              <input ref={inputRef} className="input" {...props} />
              {helperText && (
                <div className="input__helper">
                  <span>{helperText}</span>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      ) : (
        <div>
          <input ref={inputRef} className="input" {...props} />
          {helperText && (
            <div className="input__helper">
              <span>{helperText}</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}
