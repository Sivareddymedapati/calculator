import React, { Component } from 'react'

export class Calculator extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            count:""
       }
   }
   

    handleClick = (digit) => {
      const{count} = this.state
      this.setState({
          count: count+digit
        })
    }

    calculate = () => {
     const {count} = this.state
     this.setState({
         count: eval(count)
     })
    }

    handleChange = (e) => {
        const {count} = this.state
        const {target} = e
        this.setState({
            count: target.value
        }) 
    }

    reset = () => {
        this.setState({
            count:""
        })
    }
    
    render() {
        return (
            <div id="container">
			<div id="calculator">
				<div id="result">
		     		<input id="output" name="result" value={this.state.count} onBlur={this.calculate} onChange={this.handleChange}/>
				</div>
				<div id="keyboard">
					<button class="operator" id="clear" onClick={this.reset}>C</button>
					<button class="operator" id="." onClick={() => this.handleClick(".")}>.</button>
					<button class="operator" id="=" onClick={this.calculate}>=</button>
					<button class="operator" id="/" onClick={() => this.handleClick("/")}>&#247;</button>
					<button class="number" id="7" onClick={() => this.handleClick("7")}>7</button>
					<button class="number" id="8" onClick={() => this.handleClick("8")}>8</button>
					<button class="number" id="9" onClick={() => this.handleClick("9")}>9</button>
					<button class="operator" id="*" onClick={() => this.handleClick("*")}>&times;</button>
					<button class="number" id="4" onClick={() => this.handleClick("4")}>4</button>
					<button class="number" id="5" onClick={() => this.handleClick("5")}>5</button>
					<button class="number" id="6" onClick={() => this.handleClick("6")}>6</button>
					<button class="operator" id="-" onClick={() => this.handleClick("-")}>-</button>
					<button class="number" id="1" onClick={() => this.handleClick("1")}>1</button>
					<button class="number" id="2" onClick={() => this.handleClick("2")}>2</button>
					<button class="number" id="3" onClick={() => this.handleClick("3")}>3</button>
					<button class="operator" id="+" onClick={() => this.handleClick("+")}>+</button>
					<button class="empty" id="empty"></button>
					<button class="number" id="0" onClick={() => this.handleClick("0")}>0</button>
					
					
				</div>
			</div>
		</div>
        )
    }
}

export default Calculator
