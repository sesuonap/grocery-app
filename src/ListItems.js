import React, { Component } from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props);

        this.addItems = this.addItems.bind(this);
    }
    
    
    addItems(item) {
        return <li key={item.key}>{item.text}  <button onClick={() => this.delete(item.key)}>X</button></li> 

    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var listEntries = this.props.entries;
        var itemsInList = listEntries.map(this.addItems);
        
        return (
            <ul className="theList">
                {itemsInList}
            </ul>
        );
    }
}

export default ListItems;