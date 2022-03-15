import React from "react";

class Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    renderItem(item) {
        return <button
            type="button"
            className="list-group-item list-group-item-action"
            key={item.id}
            onClick={this.removeItem(item.id)}
        >{item.value}</button>;
    }

    removeItem = (id) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItems });
    };

    addPlusItem = items => e => {
        e.preventDefault();
      if(items.length) {
          const newItem = {id: items[0].id + 1, value: items[0].value + 1}
          const newItems = [newItem, ...items];
          this.setState({ items: newItems });
      } else {
          const newItem = {id: 1, value: 1}
          const newItems = [newItem, ...items];
          this.setState({ items: newItems });
      }
    };

    addMinusItem = items => e => {
        e.preventDefault();
        if(items.length) {
            const newItem = {id: items[0].id + 1, value: items[0].value - 1}
            const newItems = [newItem, ...items];
            this.setState({ items: newItems });
        } else {
            const newItem = {id: 1, value: -1}
            const newItems = [newItem, ...items];
            this.setState({ items: newItems });
        }
    };

    render() {
        return (
            <>
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.addPlusItem(this.state.items)}
                    >+</button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.addMinusItem(this.state.items)}
                    >-</button>
                </div>
            </div>
                {this.state.items.length > 0 &&
                    <div className="list-group">
                {this.state.items.map((item) => this.renderItem(item))}
                    </div>
                }
            </>
        );
    }
}

export default Component;
