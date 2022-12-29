import React from "react";

class Timer extends React.Component{
    constructor(){
        super()
        this.state={
            secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000);
    }
    render(){
        return(
            <> <br/> <br/>
                <button onClick={this.handleClick}>Start Timer</button>
                <br/><br/>
                <h2>Seconds Elapsed: {this.state.secondsElapsed}</h2>            
            </>
        )
    }
}

export default Timer;

// import React from 'react';
// class Timer extends React.Component {
//     constructor() {
//     super();
//     this.state = {
//             secondsElapsed: 0
//         };
//     }
//     start = () => {
//         this.setState({
//             secondsElapsed: this.state.secondsElapsed + 1
//         });
//     }
//     handleClick = (e) => {
//         this.interval = setInterval(this.start, 1000);
//     }
//     render() {
//         return ( <React.Fragment><br/>
//                     <button onClick = {this.handleClick}>
//                         Start Timer 
//                     </button><br/><br/>
//                     <Resultant new = {this.state.secondsElapsed}/> 
//                 </React.Fragment>);
//             }
// }
// class Resultant extends React.Component {
//     render() {
//             return ( <div>
//                         <h3> Seconds Elapsed: {this.props.new} </h3> 
//                     </div>);
//                 }
// }
// export default Timer;


// import React from 'react';
// class Timer extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//         secondsElapsed: 0
//         };
//     }
//     start = () => {
//         this.setState({
//             secondsElapsed: this.state.secondsElapsed + 1
//         });
//     }
//     handleClick = (e) => {
//         this.interval = setInterval(this.start, 1000);
//     }
//     render() {
//         return (<React.Fragment>
//                 <button onClick = {this.handleClick}> 
//                     Start Timer 
//                 </button> 
//                 <Resultant new = {this.state.secondsElapsed}/> 
//             </React.Fragment>);
//     }
// }
// function Resultant(data) {
//             return ( <h2> 
//                 Seconds Elapsed: {data.new} 
//             </h2>
//         )
// }
// export default Timer;
