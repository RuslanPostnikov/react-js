import React from "react";

class Item extends React.Component {


    render() {
        const {task, id, onRemove} = this.props;

        return (
                <div onClick={onRemove(id)} key={id}>
                    <div className="row">
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary btn-sm">-</button>
                        </div>
                        <div className="col">{task}</div>
                    </div>
                    <hr/>
                </div>

        );
    }
}

export default Item;
