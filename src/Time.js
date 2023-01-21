import React, { Component } from "react";
import { Context } from "./TestContext";
import TimeList from "./TimeList";
class Time extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
      number: 10,
      hours: 0,
      minutes: 0,
      secondes: 0,
    };
    console.log("constructor");
  }

  static contextType = Context;

  componentDidMount() {
    console.log("componentDidMount");
    //  this.newIntervalId = setInterval(() => {
    //     clearInterval(this.state.intervalId);
    //     this.setState({number: this.state.number - 1});
    // }, 1000);
  }
  componentDidUpdate() {
    // if(this.state.number === 0){
    //     clearInterval(this.newIntervalId)
    // }
  }
  componentWillUnmount() {}

  handleClickStart = () => {
    this.newIntervalId = setInterval(() => {
      this.setState({ secondes: this.state.secondes + 1 });
      if (this.state.secondes === 60) {
        this.setState({
          secondes: 0,
          minutes: this.state.minutes + 1,
        });
      }
      if (this.state.minutes === 60) {
        this.setState({
          secondes: 0,
          minutes: 0,
          hours: this.state.hours + 1,
        });
      }
    }, 1000);
  };
  handleClickStop = () => {
    clearInterval(this.newIntervalId);
  };
  handleClickReset = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      secondes: 0,
    });
  };
  handleClickArrTime=()=>{
    let h = this.state.hours;
    let m = this.state.minutes;
    let s = this.state.secondes;
    let time = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
      s > 9 ? s : "0" + s
    }`;
    this.context.setArrTime([...this.context.arrTime,time]);
  }
  render() {
    console.log("render");
    let h = this.state.hours;
    let m = this.state.minutes;
    let s = this.state.secondes;
    return (
      <>
        <div className="clock" onClick={this.handleClickArrTime} style={{color:this.context}}>
          {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
            s > 9 ? s : "0" + s
          }`}
        </div>
        {/* <button onClick={this.props.handleChange}>change</button> */}
        <div className="wrap-btn-time flex-row-center">
          <button onClick={this.handleClickStart}>start</button>
          <button onClick={this.handleClickStop}>stop</button>
          <button onClick={this.handleClickReset}>reset</button>
          <button onClick={this.props.handleChange}>change</button>
          <button onClick={this.props.handleClickChangeStyle}>
            {this.props.isLight ? "black" : "light"}
          </button>
        </div>
        {/* <TimeList>
            {this.context.arrTime}
        </TimeList> */}
        <TimeList/>
      </>
    );
  }
}

export default Time;
