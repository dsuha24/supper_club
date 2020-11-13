import React from 'react'
import Comment from './Comment'

function BestCommentTab() {
  const listComments = [
    {
      id: 1,
      author: 'darylsuharli',
      tag: 'Subs',
      profile: '3-Star Michelin - 2.2k points',
      content:
        'No matter how long I proof it (2 hours +), it just wont puff up. Is it my yeast??',
      numberLike: 321,
      timeComment: 2,
    },
    {
      id: 2,
      author: 'darylsuharli',
      tag: 'Tips',
      profile: '3-Star Michelin - 2.2k points',
      content:
        'tbh fresh yeast is way better for puffing. active dry yeast is kinda inconsistent at times. Conversion is 1:1.5 for active to fresh and you could get them at gelson',
      numberLike: 321,
      timeComment: 2,
    },
    {
      id: 3,
      author: 'darylsuharli',
      tag: 'Attempts',
      profile: '3-Star Michelin - 2.2k points',
      content:
        'First try not bad... I decided to get fancy and added a raspberry jelly filling. [link] ',
      numberLike: 321,
      timeComment: 2,
    },
  ]
  return (
    <div className="BestCommentTab">
      {listComments.map((item) => (
        <Comment
          key={item.id}
          tag={item.tag}
          author={item.author}
          profile={item.profile}
          content={item.content}
          numberLike={item.numberLike}
          timeComment={item.timeComment}
        />
      ))}
    </div>
  )
}

export default BestCommentTab
