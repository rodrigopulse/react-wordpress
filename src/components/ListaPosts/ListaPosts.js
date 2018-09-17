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
            <div className="card-columns">
                {this.state.items.map(function(item, index) {
                        var link = "/post/"+item.slug;
                        var thumbPost = item._embedded['wp:featuredmedia']['0'].media_details.sizes['thumb-card'].source_url;
                        return <div className="card">
                                <img className="card-img-top" src={thumbPost} alt="Thumb Post" />
                                <div className="card-body">
                                    
                                    <h3 className="card-title">{item.title.rendered}</h3>
                                    <a className="btn btn-primary btn-sm" href={link}>ACESSE AQUI
                                    </a>
                                </div>
                        </div>
                    }
                )}
            </div>
        );

    }
}
export default ListaPosts
