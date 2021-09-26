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
    // RENDER METHOD
    render() {
        // can only return a single div!
        return (
            <div>
                <Clock />
                <div className="welcome"> <h1 id="title">{this.state.title}, Welcome {this.state.user}  </h1> </div>
                {/* Navbar for toggling through charts/visuals */}
                <div className="visuals">
                    <span id="test">ACCOUNT SUMMARY  |  </span>
                    <span id="test">CHARGES  |  </span>
                    <span id="test">SAVINGS  |  </span>
                </div>

                {/* Inputs for entering data to be included in visuals */}
                <div className="user-inputs">
                    <span id="test">INCOME  |  </span>
                    <span id="test">EXPENSES  |  </span>
                    <span id="test">GOALS  |  </span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Design title={"Financial Reacts"} user={"Eddie"}/>, document.getElementById("root"))