import React, { Component } from 'react';

class ListaPosts extends React.Component {
    constructor() {
        super();

        this.state = {
            'items': []
        }
    }
    componentDidMount() {
        fetch('https://pulsemaker.com.br/wp-json/wp/v2/posts/')
            .then(results => results.json())
            .then(results => this.setState({'items': results}));
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(function(item, index) {
                            return <li key={index}>{item.slug}</li>
                        }
                    )}
                </ul>
            </div>
        );

    }
}
export default ListaPosts
