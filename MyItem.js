import React from 'react';
class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            totalRemaining: 4,
        }
    }

    clickMe() {
        //console.log("I clicked:", this.props.name)
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1,
        })
    }
    render() {
      return(
          <div>
            <h1 onClick={() => this.clickMe()}>
            This is {this.props.name}
            </h1>
            <span>{this.state.clicks} is the number of clicks.{this.state.totalRemaining}</span>
          </div>
        
        )
      } 
    }

export default Item;  