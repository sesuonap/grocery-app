import React, { Component } from 'react';
import ListItems from './ListItems';
import "./Container.css";255


class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            cart: [],
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        
        this._inputElement.value = "";

        console.log(this.state.items);
        e.preventDefault();

    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item){
            return (item.key !== key)
    });

    this.setState({
        items: filteredItems
    });
    } 
    
    // functions to move items between list and cart ----------------
    moveToCart = key => {
        console.log(key);
        const {items, cart} = this.state;
        const itemToMove = items.find(element => element.key === key);
        const newCart = [...cart, itemToMove];
        const newList = items.filter(item => {
            item.key !== itemToMove.key;
        });
        console.log(newList);
        this.setState({
            items: newList,
            cart: newCart
        });
    };

    moveToList = key => {
        console.log(key);
        const { cart, items } = this.state;
        const itemMovingBack = cart.find(element => element.key === key);
        const updatedList = [...items, itemMovingBack];
        const updatedCart = cart.filter(item => {
            item.key !== itemMovingBack.key;
        });
        this.setState({
            items: updatedList,
            cart: updatedCart
        });
    };
    // --------------------------------------------------------------
    
    render() {
        return (
            <div className="groceryListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="add item">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <ListItems entries={this.state.items} 
                           delete={this.deleteItem}/>
            </div>
        )
    }
}

export default Container;