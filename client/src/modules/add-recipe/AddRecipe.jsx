import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from 'components/core/TabPanel'
import MissEnTab from './components/MissEnTab'
import StepsTab from './components/StepsTab'

function AddRecipe() {
  const [tabIndex, setTabIndex] = useState(0)
  const handleChangeTab = (_tab, i) => {
    setTabIndex(i)
  }
  return (
    <div className="AddRecipe">
      <div className="tab-title">
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
        >
          <Tab label="Mise en Place" />
          <Tab label="Steps" />
        </Tabs>
      </div>
      <div className="tab-content">
        <TabPanel value={tabIndex} index={0}>
          <MissEnTab />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <StepsTab />
        </TabPanel>
      </div>
    </div>
  )
}

export default AddRecipe
