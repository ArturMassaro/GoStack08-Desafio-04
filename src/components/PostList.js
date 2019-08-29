import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://www.wibc.com/g00/3_c-8yyy.ykde.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fyyy.ykde.eqox2fukvgux2fix2fhkngux2fgzk663x2fhx2fuvangux2fnctig_952x2frwdnkex2fctvkeng-kocigu-hgcvwtgfx2figvvakocigu-3292437096.lrix3fkvqmx3draAF5TjIx26k32e.octmx3dkocig_$/$/$/$/$/$/$/$/$/$/$'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?w=800&quality=85'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://timedotcom.files.wordpress.com/2018/11/trump-midterm-elections-voting-day.jpg?w=800&quality=85'
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  }

  render(){
    return (
      <div className="container_postlist">
        { this.state.posts.map(post => <Post key={post.id} data={post} />) }
      </div>
      
    )
  }
  
}

export default PostList;