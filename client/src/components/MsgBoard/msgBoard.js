import React, { useState } from 'react'

import DiscussionBoard from 'react-discussion-board'

import 'react-discussion-board/dist/index.css'

const MsgBoard = () => {
  const allPosts = [
    {
      profileImage:'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
      name: 'Jane Doe',
      content: '<p>Hello everyone!</p><p>How are you all doing?</p><p>-Jane</>',
      date: new Date('01 Jan 2020 01:12:00 GMT')
    },
    {
      profileImage:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'John Doe',
      content:'<p>Here is a test message</p>',
      date: new Date('01 Jan 2020 09:12:00 GMT')
    }
  ]

  const [posts, setPosts] = useState(allPosts)

  const submitPost = (text) => {
    const curDate = new Date()

    setPosts([
      ...posts,
      {
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Jane Doe',
        content: text,
        date: curDate
      }
    ])
  }

  return (
    <div className='App'>
      <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
  )
}

export default MsgBoard