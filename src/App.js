import React from 'react';
import './App.css';
import Counter from "./Counter";
import Item from "./Item";
import mp3 from './zvuk.mp3'
import avengers from './avengers-endgame.jpg'
import theme from './the_avengers_theme.mp3'


class App extends React.Component {

    state = {
        counter: 0,
        index: 1,
        time: 700,
        item: [{},{}, {}, {}, {}, {}, {},{},{}],
        digit: 0

    }

    setNewInterval = (time) => {
        setInterval(() => {
                this.getRandomImageIndex()
            },
            time);
    }

    onCounterClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });

        let audio = new Audio(mp3)
        audio.play();
        let finish = new Audio(theme);
        if (this.state.counter === 9) {
            finish.play();
        }


    }

    getRandomImageIndex = () => {
        this.setState({
            index: Math.floor(Math.random() * 9)
        })
    }

    componentDidMount() {
        this.setNewInterval(this.state.time);
    }
    startAgain = () => {
        this.setState({
            counter: 0
        })

    }


    render() {
        // let finish = this.state.counter === 10 ? this.congrats() : ''

        let items = this.state.item.map((item, i) => <Item onClick={this.onCounterClick}
                                                           index={this.state.index} key={i} id={i}/>)
    return (<div className='gameScreen'>
            <img className='logo' src={avengers} />
        <div className="wrapper">
            {/*{finish}*/}
            <div className='title'>Can you catch 10 ?</div>


            {items}

            <Counter startAgain={this.startAgain} state={this.state} />


        </div>
        </div>


    );
  }
}

export default App;
