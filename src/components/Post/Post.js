import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class Post extends React.Component {
    constructor() {
        super();

        this.state = {
            post: {
                title: {
                    rendered: ''
                },
                content: {
                    rendered: ''
                }
            }
        }
    }
    componentDidMount() {
        var url  = window.location.href;
        var slug = url.split("/")[url.split("/").length -1];
        fetch("https://pulsemaker.com.br/wp-json/wp/v2/posts/?slug=10-projetos-para-fazer-com-arduino")
            .then(results => results.json())
            .then(results => this.setState({'post': results[0]}));
    }

    render() {
        return (
            <div className="wrapper">
                <h1>{this.state.post.title.rendered}</h1>
            </div>
        );
    }
}
export default Post
