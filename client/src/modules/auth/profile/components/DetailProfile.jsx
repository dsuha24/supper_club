import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 8,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#FC9700',
  },
}))(LinearProgress)

function DetailProfile() {
  return (
    <div className="DetailProfile">
      <div className="DetailProfileContent">
        <h3>
          darylsuharli <sub>3-Star Michelin Bow Down</sub>
        </h3>
        <img
          className="chef-image"
          src="/images/chef/imageChef.jpg"
          alt="imageChef"
        />
        <div className="name-detail">
          <h5>Daryl Suharli</h5>
        </div>
        <div className="name-detail">
          <p>5 beets day for 3</p>
        </div>
        <div className="name-detail">
          <p>Los Angeles</p>
        </div>
        <div className="hr-point">
          <div className="points">
            <p className="title-point">Points</p>
            <p className="number-point">16.4k</p>
          </div>
          <hr />
        </div>
        <div className="progress-master">
          <BorderLinearProgress variant="determinate" value={50} />
          <p>Master</p>
        </div>
      </div>
    </div>
  )
}

export default DetailProfile
