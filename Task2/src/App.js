import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.state = {
      timeLeft: 0,
      timer: null
    }
  }

  startTimer(time) {
    clearInterval(this.state.timer);
    let timeToCount;
    timeToCount = this.state.timeLeft;
    let timer = setInterval(() => {
      timeToCount = timeToCount + 1;
      if (timeToCount === +time) {
        clearInterval(timer);
      }
      this.setState({
        timeLeft: timeToCount
      })
    }, 1000);
    return this.setState({timeLeft: timeToCount, timer: timer});
  }

  pauseTimer() {
    clearInterval(this.state.timer);
  }

  stopTimer() {
    clearInterval(this.state.timer);
    return this.setState({timeLeft: 0});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Timer</h2>
          <Button name="Запуск" time="10" doAction={this.startTimer}/>
          <Button name="Пауза" doAction={this.pauseTimer}/>
          <Button name="Стоп" doAction={this.stopTimer}/>
          <TimerDisplay timeLeft={this.state.timeLeft}/>
        </header>
      </div>
    );
  }
}

class Button extends React.Component {
  handleTimer() {
    return this.props.doAction(this.props.time);
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
