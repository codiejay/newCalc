import React from "react";
import "./Calculator.css"
import Button from "../Buttons/Button"
import Screen from "../Screen/Screen";


class Calculator extends React.Component {
  
    state = {
        calcProcess: "",
        result: 0,
        opeartor: "",
        firstCalc: "",
        secondCalc: "",
        firstCheck: true, 
    }
 
    btnClick = (e) => {
       let elementClicked = e.target.innerText;

       if(elementClicked !== "-" &&
       elementClicked !== "+" && 
       elementClicked !== "/" &&
       elementClicked !== "*" 
       ){

        if(this.state.firstCheck === true) {
            this.setState (  
                {
                 firstCalc: this.state.firstCalc + elementClicked,
                 secondCalc: this.state.secondCalc,
                 calcProcess: this.state.calcProcess + elementClicked,
                 result: this.state.result,
                }
            )
        }

        else{ 
            this.setState (  
                {
                 firstCalc: this.state.firstCalc,
                 secondCalc: this.state.secondCalc + elementClicked,
                 calcProcess: this.state.calcProcess + elementClicked,
                 result: this.state.result,
                }
            )
        }
           
       }

       else if(elementClicked === "+" || 
        elementClicked === "-"  ||
        elementClicked === "*" ||
        elementClicked === "/"){
        if(this.state.firstCheck === true) {

            this.setState (  
                {
                    firstCheck: false,
                    firstCalc: this.state.calcProcess,
                    calcProcess: this.state.calcProcess += elementClicked,
                    result: 0,
                }
            )
        }
      

        console.log(this.state.firstCalc)
       }
    }

    equalTo = () => {

        this.setState (  
            {
                calcProcess: "",
                result:  
                    parseInt( this.state.firstCalc ) + parseInt( this.state.secondCalc ),
                opeartor: "",
                firstCalc: "",
                secondCalc: "",
                firstCheck: true, 
            }
        )
    }



    render() {
        return (
            <div id="calculatorBody">
                <Screen calcProcess={this.state.calcProcess} result={this.state.result} /> 
                
                <div id="key">

                   <Button btnClick={this.btnClick} value={'+'} />
                   <Button btnClick={this.btnClick} value={'-'} />
                   <Button btnClick={this.btnClick} value={'/'} />
                   <Button btnClick={this.btnClick} value={'*'} />
                   <Button btnClick={this.btnClick} value={'7'} />
                   <Button btnClick={this.btnClick} value={'8'} />
                   <Button btnClick={this.btnClick} value={'9'} />
                   <Button btnClick={this.btnClick} value={'4'} />
                   <Button btnClick={this.btnClick} value={'5'} />
                   <Button btnClick={this.btnClick} value={'6'} />
                   <Button btnClick={this.btnClick} value={'1'} />
                   <Button btnClick={this.btnClick} value={'2'} />
                   <Button btnClick={this.btnClick} value={'3'} />
                   <Button btnClick={this.btnClick} value={'0'} />
                   <Button btnClick={this.btnClick} value={'.'} />
                   <Button btnClick={this.equalTo} value={'='} />
               

                </div>
           
            </div>
        )
    }
}


export default Calculator;