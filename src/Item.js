import React from 'react';
import './App.css';
import thanos from "./thanos.jpg"

class Item extends React.Component {


    render() {

        let shown = this.props.index === this.props.id ? 'show' : ''



        return (

                <div className='item'><img onClick={this.props.onClick} src={thanos} className={`photo + ${shown}`}/></div>



        );
    }
}

export default Item;
