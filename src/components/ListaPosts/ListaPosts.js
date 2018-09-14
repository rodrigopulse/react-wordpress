import React, { Component } from 'react';

class ListaPosts extends React.Component {
    constructor() {
        super();

        this.state = {
            'items': []
        }
    }
    componentDidMount() {
        fetch('https://pulsemaker.com.br/wp-json/wp/v2/posts?_embed')
            .then(results => results.json())
            .then(results => this.setState({'items': results}));
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(function(item, index) {
                            var link = "/post/"+item.slug;
                            var thumbPost = item._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;
                            return <li>
                                <a href={link}>
                                    <img src={thumbPost} alt="" />
                                    {item.title.rendered}
                                </a>
                            </li>
                        }
                    )}
                </ul>
            </div>
        );

    }
}
export default ListaPosts
