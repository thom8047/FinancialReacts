import React from "react"
import ReactDOM from "react-dom"
import Clock from "./modules/Clock.js"

class Design extends React.Component {
    // CONSTRUCTOR METHOD
    constructor(props) {
        super(props);
        this.state = {
            // STATE VARIABLES
            title: props.title,
            user: props.user,
        };
    }
    changeCurrentVisuals(id) {
        console.log(id);
    }
    // RENDER METHOD
    render() {
        // can only return a single div!
        return (
            <div>
                <Clock />
                <div className="welcome"> <h1 id="title">{this.state.title}, Welcome {this.state.user}  </h1> </div>
                {/* Navbar for toggling through charts/visuals */}
                <div className="visuals">
                    <span>
                        <button onClick={(event) => { this.changeCurrentVisuals("sum"); }} className="sum" id="header">ACCOUNT SUMMARY</button>
                        <button onClick={(event) => { this.changeCurrentVisuals("charge"); }} className="charge" id="header">CHARGES</button>
                        <button onClick={(event) => { this.changeCurrentVisuals("save"); }} className="save" id="header">SAVINGS</button>
                    </span>
                </div>

                {/* Inputs for entering data to be included in visuals */}
                <div className="user-inputs">
                    <span id="header">INCOME</span>
                    <span id="header">EXPENSES</span>
                    <span id="header">GOALS</span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Design title={"Financial Reacts"} user={"Eddie"}/>, document.getElementById("root"))