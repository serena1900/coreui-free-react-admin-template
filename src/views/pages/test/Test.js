import React from 'react'
import axios from 'axios'

class Test extends React.Component {
  state = {
    posts: [],
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res)
      this.setState({
        post: res.data.slice(0, 10),
      })
    })
  }
  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return <div className="container">{postList}</div>
  }
}
export default Test
// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const userId = {
//       name: this.state.name
//     };

//     axios.post(`https://stoplight.io/mocks/calendso/calendso:main/10038925/api/auth/signup/user`, { userId })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }