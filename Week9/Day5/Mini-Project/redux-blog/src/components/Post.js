import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
        })
    }

    render() {
        console.log(this.state.post)
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading...</div>
        )

        return(
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Post;