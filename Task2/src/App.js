import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startOrStopTimer = this.startOrStopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.state = {
      timeLeft: null,
    }
  }

  startOrStopTimer(time, name) {
    let isPaused = false;
    if (name === "Пауза") {
        isPaused = true;
    } 
    let timeLeft = time;
    let timer = setInterval(() => {
      timeLeft = timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(timer);
      }
      this.setState({
        timeLeft: timeLeft
      })
    }, 1000);
    return this.setState({timeLeft: timeLeft})
  }

  pauseTimer() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Timer</h2>
          <Button name="Запуск" time="10" doAction={this.startOrStopTimer}/>
          <Button name="Пауза" doAction={this.startOrStopTimer}/>
          <Button name="Стоп" doAction={this.startOrStopTimer}/>
          <TimerDisplay timeLeft={this.state.timeLeft}/>
        </header>
      </div>
    );
  }
}

class Button extends React.Component {
  handleTimer() {
    return this.props.doAction(this.props.time, this.props.name);
  }

  render() {
    return <button onClick={this.handleTimer.bind(this)}>{this.props.name}</button>
  }

}

class TimerDisplay extends React.Component {
  render() {
    return <div>Осталось времени: {this.props.timeLeft}</div>
  }
}

export default App;
