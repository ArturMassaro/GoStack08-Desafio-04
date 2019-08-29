import React from 'react';
import User1 from '../assets/user1.jpg'

import Comment from './Comment';

function Post({data}) {
  console.log(data)

  return (
    <>
      <div className="container_post">
        <div className="post_header">
          <img src={data.author.avatar} alt="" className="user_thumb"/>
          <div className="user_datas">
            <p className="user_datas_name">{data.author.name}</p>
            <p className="user_datas_date">{data.date}</p>
          </div>
        </div>
        <p className="post_content">{data.content}</p>
        <div className="space_div"></div>
        { data.comments.map(comment => <Comment key={comment.id} data={comment} />) }
        
      </div>
    </>
  );
}

export default Post;