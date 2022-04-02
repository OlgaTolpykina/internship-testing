import React from 'react';
import ButtonTag from '@mui/material/Button';
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
    let timeToCount = (this.state.timeLeft < time) ? this.state.timeLeft : 0;
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
          <h2 className='App-title'>Timer</h2>
          <TimerDisplay timeLeft={this.state.timeLeft}/>
          <div className='button-wrapper'>
            <Button name="Запуск" time="10" doAction={this.startTimer}/>
            <Button name="Пауза" doAction={this.pauseTimer}/>
            <Button name="Стоп" doAction={this.stopTimer}/>
          </div>
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
    return <ButtonTag className='App-button' variant="contained" onClick={this.handleTimer.bind(this)}>{this.props.name}</ButtonTag>
  }

}

class TimerDisplay extends React.Component {
  render() {
    return <div className='App-subtitle'>Осталось времени: <p>{this.props.timeLeft}</p></div>
  }
}

export default App;
