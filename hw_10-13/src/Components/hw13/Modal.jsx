import React from 'react';
import classnames from "classnames";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const { isOpen } = this.props;
        const modalClass = classnames('modal', {
            'shadow': isOpen
        });

        return (<div
            className={modalClass}
            style={isOpen ? {display: "block"} : {display: "none"}}
            role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        </div>);
    }

}


