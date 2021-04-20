import React, { useState } from 'react'
import DiscussionBoard from 'react-discussion-board'
import 'react-discussion-board/dist/index.css'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'



function MsgBoard() {

    const allPosts = [
        {
            profileImage:
            'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg,',
            name:'John Doe',
            content: '<p>Hello Everyone!</p><p>-John</>',
            date: new Date ('17, Apr 2021 13:44.00 GMT')

        },
        {
            profileImage:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Jane Doe',
            content:'<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, vero reiciendis. Vel reiciendis, blanditiis maiores dicta veritatis a numquam perspiciatis. </p>',
            date: new Date('01 Jan 2020 09:12:00 GMT')
        }
    ]

    const [posts, setPosts] = useState(allPosts)

    const submitPost = (text) => {
        const currentDate = new Date()

        setPosts([
            ...posts,
            {
                profileImage:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name: 'Jane Doe',
                content: 'Maiores velit, atque voluptatum aliquam sapiente',
                date:currentDate

            }
        ])
    }
    return (
        <div className='MsgBoard'>
            <DiscussionBoard posts={posts} onSubmit={submitPost}/>
        </div>
    )
}

export default MsgBoard