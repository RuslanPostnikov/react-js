import React from "react";

export default class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    renderPosts = async () => {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
    }

    componentDidMount() {
        this.renderPosts()
            .then(res => res.json())
            .then(items => this.setState({
                isLoaded: true,
                posts: items
            }));
    }

    render() {
        const { isLoaded, posts } = this.state;
        return (
            <div className="posts">
                <ul className="posts__list">
                    {isLoaded && posts.map(post => {
                        return <li
                            className="posts_single-post"
                            key={post.id}
                            data-post-id={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}
