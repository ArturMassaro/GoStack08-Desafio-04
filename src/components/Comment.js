import React from 'react';

import User1 from '../assets/user1.jpg'


function Comment({data}) {
  return (
    <>
      <div className="container_comment">
        <img src={data.author.avatar} alt="" className="user_thumb"/>
        <div className="comment_box">
        <p><b>{data.author.name} </b>{data.content}</p>
        </div>
      </div>
    </>
  )
}

export default Comment;