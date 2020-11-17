import React from "react"
import {connect} from "react-redux"
import {increment, decrement} from "./redux"
 
function App(props) {    
    return (
        <div>
          <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

function mapStatetoProps(globalState) {
  return {
    count: globalState
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStatetoProps, mapDispatchToProps) (App)