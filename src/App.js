import React from 'react';
import './App.css';
import Counter from "./Counter";
import Item from "./Item";
import mp3 from './zvuk.mp3'
import avengers from './avengers-endgame.jpg'
import theme from './the_avengers_theme.mp3'
import {connect} from "react-redux";
import {clickCounterAC, getRandomImageIndexAC, startAgainAC} from "./store";


class App extends React.Component {

    // state = {
    //     counter: 0,
    //     index: 1,
    //     time: 700,
    //     item: [{},{}, {}, {}, {}, {}, {},{},{}],
    //     digit: 0
    //
    // }

    setNewInterval = (time) => {
        setInterval(() => {
                this.getRandomImageIndex()
            },
            time);
    }

    onCounterClick = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });

        this.props.clickCounter(this.props.counter)

        let audio = new Audio(mp3)
        audio.play();
        let finish = new Audio(theme);
        if (this.props.counter === 9) {
            finish.play();
        }


    }

    getRandomImageIndex = () => {
        // this.setState({
        //     index: Math.floor(Math.random() * 9)
        // })

        this.props.getRandomImageIndex(this.props.index)
    }

    componentDidMount() {
        this.setNewInterval(this.props.time);
    }
    startAgain = () => {
        // this.setState({
        //     counter: 0
        // })

        this.props.startAgain(this.props.counter)

    }


    render() {
        // let finish = this.state.counter === 10 ? this.congrats() : ''

        let items = this.props.item.map((item, i) => <Item onClick={this.onCounterClick}
                                                           index={this.props.index} key={i} id={i}/>)
    return (<div className='gameScreen'>
            <img className='logo' src={avengers} />
        <div className="wrapper">
            {/*{finish}*/}
            <div className='title'>Can you catch 10 ?</div>


            {items}

            <Counter startAgain={this.startAgain} state={this.props} />


        </div>
        </div>


    );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        index: state.index,
        time: state.time,
        item: state.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickCounter: () => {
            dispatch(clickCounterAC())
        },
        getRandomImageIndex: () => {
            dispatch(getRandomImageIndexAC())
        },
        startAgain: () => {
            dispatch(startAgainAC())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
