import React, { Component } from 'react';

class CartItems extends Component {
    constructor(props) {
        super(props);

        this.moveItems = this.moveItems.bind(this);
    }

    moveItems(e) {
        return <li key={item.key}>{item.text} <button onClick={() => this.move(item.key)}>X</button></li>

    }

    move(key) {
        this.props.move(key)
    }
}


