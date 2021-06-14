import React from 'react';

class Post extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.match.params.post_id);
        let id = this.props.match.params.post_id
    }

    render() {
        return(
            <div className="container">
                <h4>Route Param</h4>
            </div>
        )
    }
}

export default Post;