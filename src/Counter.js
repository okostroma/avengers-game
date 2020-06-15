import React from 'react';
import './App.css';

class Counter extends React.Component {
  render() {
    return (
        <div className="App">

            {this.props.state.counter === 10 ? <div className='finish'> CONGRATS! <button onClick={this.props.startAgain}>Start again</button> </div> : <span> {this.props.state.counter}</span>}

        </div>
    );
  }
}

export default Counter;
