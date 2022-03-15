import React from "react";
import { v4 as uuid } from 'uuid';

import Item from "./Item";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    removeItem = (id) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItems });
    };

    addItem = () => e => {
        e.preventDefault()
        const { items } = this.state
        const input = document.querySelector('input');
        const newItem = {id: uuid().slice(0, 8), task: input.value}
        const newItems = [newItem, ...items];
        this.setState({ items: newItems });
        input.value = '';
        console.log(items);
    }


    render() {
        return (
            <>
                <div>
                    <div className="mb-3">
                        <form className="d-flex" onSubmit={this.addItem()}>
                            <div className="me-3">
                                <input type="text" required className="form-control"
                                       placeholder="I am going..."/>
                            </div>
                            <button type="submit" className="btn btn-primary">add</button>
                        </form>
                    </div>
                </div>
                <>
                    {this.state.items.map(item =>
                        <Item task={item.task} onRemove={this.removeItem} id={item.id}/>
                    )}
                </>
            </>
        );
    }

}

export default TodoBox;

