/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { TextArea, Button } from 'components/core'
import PanoramaIcon from '@material-ui/icons/Panorama'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from 'components/core/TabPanel'
import BestCommentTab from './BestCommentTab'

function CommentSection() {
  const listTag = ['Critique', 'Attempt', 'Tips', 'Subs']
  const [tag, setTag] = useState('')
  const [tabIndex, setTabIndex] = useState(0)
  const selectTag = (tagSelect) => {
    setTag(tagSelect)
  }
  const handleChangeTab = (_tab, i) => {
    setTabIndex(i)
  }
  return (
    <div className="CommentSection">
      <TextArea
        name="comment"
        type="text"
        rows={4}
        cols={50}
        placeholder="Say something"
        style={{
          borderRadius: 8,
          resize: 'none',
          border: '0.5px solid #707070',
        }}
      />
      <div className="submit-form">
        <div className="add-tag">
          <h4>Add tag</h4>
          {tag && <div className="item-tag">{tag}</div>}
        </div>
        <div className="submit-comment">
          <PanoramaIcon className="add-image" />
          <Button type="submit" className="button">
            Submit
          </Button>
        </div>
      </div>
      <div className="list-tag">
        {listTag.map((item) => (
          <div key={item} className="item-tag" onClick={() => selectTag(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="tab-title">
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChangeTab}
          aria-label="disabled tabs example"
        >
          <Tab label="Best" style={{ color: 'red' }} />
          <Tab label="New" />
        </Tabs>
      </div>
      <div className="tab-content">
        <TabPanel value={tabIndex} index={0}>
          <BestCommentTab />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <BestCommentTab />
        </TabPanel>
      </div>
    </div>
  )
}

export default CommentSection
