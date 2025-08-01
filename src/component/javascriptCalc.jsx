import React, { Component } from "react";
import"./javascriptCalc.css"
let add = "+";
let sub = "-";
let mult = "*";
let div = "/";
let zero = "0";
let decimal = ".";
class JavascriptClaculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        display: "0",
        input: "0"
        } 
    }

    //start of Handling click buttons....
    Clear=()=>{
        this.setState({display: "0", input: "0"})
        mult = "*";
        add = "+";
        sub = "-";
        div = "/";
        zero = "0"
        };
    Zero = ()=>{
        //start

        // traditional metod 
        /* const display = this.state.display;
            if (display[display.length - 1] === "+" || display[display.length - 1] === "-" || display[display.length - 1] === "*" || display[display.length - 1] === "/" || display === "") {
                this.setState({display: this.state.display + zero})
            } else if (display.includes("=")) {
                 this.setState({display: zero});
            } else if (display === "0") {
                this.setState({display: zero});
            } else {
                 this.setState({display: this.state.display + zero});
            } */

        // advanced method 
        this.setState((prevState)=>{
            // distructing the object state 
            const {display} = prevState;
            if(display.length === 1 && ["+","-","*","/","0",""].includes(display[0])){
                return{display: zero};
            }
            if(display.includes("=")) {
             return  {display: zero}
            }

            if(display.length > 1 && (["*","/","+","-"].includes(display[display.length-2]) && display[display.length - 1] === "0")){
                return {display: display.slice(0,-1) + zero}
            }
            // return if the above case is not meet the condition  
            return{display: display + zero}
        })
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        //end
    };
    One=()=>{
        // start 
    this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "1"}
    };

    if (display.includes("=")) {
      return { display: "1" };
    }
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
    // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0,-1) + "1" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "1" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };

    Two=()=>{
        // start
    this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "2"}
    };
    if (display.includes("=")) {
      return { display: "2" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
       // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0, -1) + "2" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "2" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };

    Three=()=>{
        // start
           this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "3"}
    };
    if (display.includes("=")) {
      return { display: "3" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
       // If a parameter is negative in slice, the position is counted from the end of the string: 
      return { display: display.slice(0, -1) + "3" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "3" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        //end
    };

    Four=()=>{
        // start
           this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "4"}
    };
    if (display.includes("=")) {
      return { display: "4" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
    // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0, -1) + "4" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "4" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };

     Five=()=>{
        // sart
    this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "5"}
    };
    if (display.includes("=")) {
      return { display: "5" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
     // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0, -1) + "5" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "5" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };

     Six=()=>{
        // start
    this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "6"}
    };
    if (display.includes("=")) {
      return { display: "6" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
    // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0, -1) + "6" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "6" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };

    Seven=()=>{
        // start
    this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "7"}
    };
    if (display.includes("=")) {
      return { display: "7" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
 // If a parameter is negative in slice, the position is counted from the end of the string:
    return { display: display.slice(0, -1) + "7" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "7" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };
    Eigth=()=>{
        // start
    this.setState(prevState => {
    const { display } = prevState;
    if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "8"}
    };
    if (display.includes("=")) {
      return { display: "8" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
    // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0, -1) + "8" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "8" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };
    Nine=()=>{
        // start
    this.setState(prevState => {
    const { display } = prevState;
       if(display.length === 1 && ["*","/","+","-","0",""].includes(display[0])){
        return{display: "9"}
    };
    if (display.includes("=")) {
      return { display: "9" };
    }
    
    if (display.endsWith("0") && 
        (display.length >= 2 && 
         ["*", "/", "+", "-"].includes(display[display.length - 2]))) {
    // If a parameter is negative in slice, the position is counted from the end of the string:
      return { display: display.slice(0, -1) + "9" };
    }
     // return if the above case is not meet the condition 
    return { display: display + "9" };
  });
        add = "+";
        sub = "-";
        mult = "*";
        div = "/";
        zero = "0";
        // end
    };
 Add=()=>{
        // start

        // adavanced method 
        this.setState((prevState)=>{
            // the variable must be aissing or declare or re-assing in the setState  
             add = "+";
            // object distructing 
        const {display, input} = prevState;
        if(display.length === 1 && ["*","/","+","-"].includes(display[0])){
        return {display: add};
        };

       if(display.length > 1) {
        if(["*","/"].includes(display[display.length - 2]) && ["-"].includes(display[display.length - 1])) {
             return {display: display.slice(0,-2) + add};
        }
        
         if((!["/","*"].includes(display[display.length -2]) && ["*","/","+","-","."].includes(display[display.length - 1]))){
            return {display: display.slice(0,-1) + add};
        };
      };

      if(display.includes("=")){
         return {display: input + add};
      }

      return({display: display + add});
    })

          // traditional method  
        /* const display = this.state.display;
         const array = display.split("");
        const lastItem = display[display.length - 1];
        const nextToLastItem = display[display.length - 2];
        add = "+"
        if (display.length < 2) {
            if (display === "" || display === "*" || display === "-" || display === "/" || display === "+") {
               this.setState({display: add})
            } else {
                this.setState({display: this.state.display + add})
            }
        }
        if (display.length >= 2) {
            if (display.length === 2) {
                if (lastItem === "*" || lastItem === "/" || lastItem === "-" || lastItem === "+" || lastItem === ".") {
                    array[array.length-1] = add;
                 this.setState({display: array.join("")})
                } else {
                     this.setState({display: this.state.display + add})
                }
            }
            if (display.length > 2) {
                if (lastItem === "*" || lastItem === "/" || lastItem === "+" || (lastItem === "-" && (nextToLastItem !== "*" && nextToLastItem !== "/"))) {
                    array[array.length-1] = add;
                 this.setState({display: array.join("")})
                } else if (lastItem === "-" && (nextToLastItem === "*" || nextToLastItem === "/")) {
                     array.pop();
                    array[array.length-1] = add;
                 this.setState({display: array.join("")})
                } else if (display.includes("=")) {
                    this.setState({display: this.state.input + add})
                } else {
                    this.setState({display: this.state.display + add})
                }
            }
        } */
        add = ""
        zero = "0";
        // end
    };
    
     Multiply=()=>{
        // start
    //    advanced method 
    // prevState is refer to the previous state object means 'this.state"
  this.setState((prevState)=>{
            // the variable must be aissing or declare or re-assing in the setState  
             mult = "*";
            // object distructing 
        const {display, input} = prevState;
        if(display.length === 1 && ["*","/","+","-"].includes(display[0])){
        return {display: mult};
        };

       if(display.length > 1) {
        if(["*","/"].includes(display[display.length - 2]) && ["-"].includes(display[display.length - 1])) {
             return {display: display.slice(0,-2) + mult};
        }
        
         if((!["/","*"].includes(display[display.length -2]) && ["*","/","+","-","."].includes(display[display.length - 1]))){
            return {display: display.slice(0,-1) + mult};
        };
      };

      if(display.includes("=")){
         return {display: input + mult};
      }

      return({display: display + mult});
    })


        // traditional method 
       /* const display = this.state.display;
        const array = display.split("");
        const lastItem = array[array.length - 1];
        const nextToLastItem = array[array.length - 2];
        mult = "*";
        if (array.length < 2) {
            if (display === "" || display === "+" || display === "-" || display === "/" || display === "*") {
               this.setState({display: mult})
            } else {
                this.setState({display: this.state.display + mult})
            }
        }
        if (array.length >= 2) {
            if (array.length === 2) {
                if (lastItem === "*" || lastItem === "/" || lastItem === "-" || lastItem === "+" || lastItem === ".") {
                    array[array.length - 1] = mult;
                   this.setState({display: array.join("")})
                } else {
                    this.setState({display: this.state.display + mult})
                }
            }
            if (array.length > 2) {
                if (lastItem === "*" || lastItem === "+" || lastItem === "/" || (lastItem === "-" && (nextToLastItem !== "*" && nextToLastItem !== "/"))) {
                    array[array.length - 1] = mult;
                    this.setState({display: array.join("")})
                } else if (lastItem === "-" && (nextToLastItem === "*" || nextToLastItem === "/")) {
                    array.pop();
                    array[array.length - 1] = mult;
                    this.setState({display: array.join("")})
                } else {
                   this.setState({display: this.state.display + mult})
                }
            }
        }
        if (display.includes("=")) {
            this.setState({display: this.state.input + mult})
        } */
        mult = "";
        zero = "0";
        // end
    };

    Division=()=>{
            // start
//    advanced method 
    // prevState is refer to the previous state object means 'this.state"
  this.setState((prevState)=>{
            // the variable must be aissing or declare or re-assing in the setState  
             div = "/";
            // object distructing 
        const {display, input} = prevState;
        if(display.length === 1 && ["*","/","+","-"].includes(display[0])){
        return {display: div};
        };

       if(display.length > 1) {
        if(["*","/"].includes(display[display.length - 2]) && ["-"].includes(display[display.length - 1])) {
             return {display: display.slice(0,-2) + div};
        }
        
         if((!["/","*"].includes(display[display.length -2]) && ["*","/","+","-","."].includes(display[display.length - 1]))){
            return {display: display.slice(0,-1) + div};
        };
      };

      if(display.includes("=")){
         return {display: input + div};
      }

      return({display: display + div});
    })

            // traditional method 
       /* const display = this.state.display;
        const array = display.split("");
        const lastItem = array[array.length - 1];
        const nextToLastItem = array[array.length - 2];
        div = "/";
        if (array.length < 2) {
            if (display === "" || display === "+" || display === "-" || display === "/" || display === "*") {
                this.setState({display: div})
            } else {
                this.setState({display: this.state.display + div})
            }
        }
        if (array.length >= 2) {
            if (array.length === 2) {
                if (lastItem === "*" || lastItem === "/" || lastItem === "-" || lastItem === "+" || lastItem === ".") {
                    array[array.length - 1] = div;
                    this.setState({display: array.join("")})
                } else {
                    this.setState({display: this.state.display + div})
                }
            }
            if (array.length > 2) {
                if (lastItem === "*" || lastItem === "+" || lastItem === "/" || (lastItem === "-" && (nextToLastItem !== "*" && nextToLastItem !== "/"))) {
                    array[array.length - 1] = div;
                   this.setState({display: array.join("")})
                } else if (lastItem === "-" && (nextToLastItem === "*" || nextToLastItem === "/")) {
                    array.pop();
                    array[array.length - 1] = div;
                    this.setState({display: array.join("")})
                } else {
                    this.setState({display: this.state.display + div})
                }
            }
        }
        if (display.includes("=")) {
            this.setState({display: this.state.input + div})
        } */
        div = "";
        zero = "0";
            // end
        };
      Substract=()=>{
        // start

      //  advanced method 
  this.setState((prevState)=>{
      sub = "-"
      const {display, input} = prevState;
     if(display.length > 1 && ["+","-","."].includes(display[display.length - 1])) {
         return {display: display.slice(0,-1) + sub}
        };
      if(display.includes("=")){
        return {display: input + sub}
      };

     return {display: display + sub}
  })

        // traditional method 
        /* const display = this.state.display;
        const array = display.split("");
        const lastItem = array[array.length - 1];
        const nextToLastItem = array[array.length - 2];
        sub = "-";
        if (array.length < 2) {
            if (display === "" || display === "+" || display === "-" || display === "/" || display === "*") {
                this.setState({display: sub})
            } else {
                this.setState({display: this.state.display + sub})
            }
        }
        if (array.length >= 2) {
            if (array.length === 2) {
                if (lastItem === "-" || lastItem === "+" || lastItem === ".") {
                    array[array.length - 1] = sub;
                    this.setState({display: array.join("")})
                } else {
                   this.setState({display: this.state.display + sub})
                }
            }
            if (array.length > 2) {
                if (lastItem === "*" || lastItem === "/") {
                    this.setState({display: this.state.display + sub})
                } else if (lastItem === "+" || (lastItem === "-" && (nextToLastItem !== "*" && nextToLastItem !== "/"))) {
                    array[array.length - 1] = sub;
                   this.setState({display: array.join("")})
                } else if (lastItem === "-" && (nextToLastItem === "*" || nextToLastItem === "/")) {
                    array.pop();
                    array[array.length - 1] = sub;
                    this.setState({display: array.join("")})
                } else {
                   this.setState({display: this.state.display + sub})
                }
            }
        }
        if (display.includes("=")) {
            this.setState({display: this.state.input + sub})
        } */
        sub = "";
        zero = "0";
        //end
    }

    Decimal=()=>{
        // start
        const display = this.state.display;
        const array = display.split("");
        const lastItem = array[array.length - 1];
        decimal = "."
        // avoiding  unnecessary add of decimal after clicking the equal sign..
        if(display.includes("=") ){
            if(!(0 < Math.abs(this.state.input) <1)){
             this.setState({display: "0" + decimal})
            return;
            }
        }
        // filter(i=>i !== -1) below is to avoid the result of array.index() "-1", since lastIndexOf will return the index value of "-1" if it didn't get the value
        const operatorIndices = [array.lastIndexOf("-"), array.lastIndexOf("+"), array.lastIndexOf("*"), array.lastIndexOf("/")].filter(i => i !== -1);
        const lastOperation = operatorIndices.length > 0 ? Math.max(...operatorIndices) : 0;
        // getting the array value after the index in this case "lastOperatio" 
        const findDecimalAfterLastOpt = array.slice(lastOperation);
        if (display === "" || ["*", "/", "+", "-"].includes(lastItem)) {
            this.setState({display: this.state.display + "0" + decimal})
        } else if (!findDecimalAfterLastOpt.includes(decimal)) {
            this.setState({display: this.state.display + decimal})
        }
        decimal = "";
        zero = "0";
        // end
    };
    Equal=()=>{
        // start
        // object distructing 
         const {display} = this.state;
           // single number then and operation handling
        if( ["*","/","+","-"].includes(display[display.length - 1]) && display.length === 2){
                this.setState({input: display[0], display: display[0] + "=" + display[0] });
                return;    
        }
       
        // triming the white or blank space in the string......
        const trimedDisplay = display.replace(/\s*/g,"") 
        // this is dislaying as array by grouping as regex fashion e.g ["*-","/-"]
     const tokens = trimedDisplay.match(/(?:\d+\.?\d*)|(\+\-)|(\*\-)|(^\-\d+\.?\d*)|(^\+\d+)|(\/\-)|([+\-*/])/g) || []; 
        // avoiding the effect of last operation if it exists at the end 
        if(["*","/","+","-"].includes(tokens[tokens.length - 1])){
              tokens.pop();
        }
        // handling "*" and "/"" first
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "*" || tokens[i] === "/" || tokens[i] === "*-" || tokens[i] === "/-") {
                if (tokens[i] === "*" || tokens[i] === "/") {
                    const left = Number(tokens[i - 1]);
                    const right = Number(tokens[i + 1]);
                    const result = tokens[i] === "*" ? left * right : left / right;
                    tokens.splice(i - 1, 3, result.toString());
                    i -= 2;
                };
                if (tokens[i] === "*-" || tokens[i] === "/-") {
                    const left = Number(tokens[i - 1]);
                    const right = Number(tokens[i + 1]);
                    const result = tokens[i] === "*-" ? -1 * left * right : -1 * left / right;
                    tokens.splice(i - 1, 3, result.toString());
                    i -= 2;
                };

            }
        }

        // handling + and - operation....
        let result = Number(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            const right = Number(tokens[i + 1]);
            result = tokens[i] === "+" ? (result*100 + right*100)/100 : (result*100 - right*100)/100
        }

         // handling equal operation
        if (!display.includes("=")) {
          this.setState({input: result, display: display + "=" + result})
        } 

     
        // end
    };
    
    delete= ()=>{
         // start
         const display = this.state.display
         if(!display.includes("=")){
            if(display.length === 1){
            this.setState({display: "0"});
            }else{
                this.setState({display: display.slice(0,display.length - 1)});
            }
         } 
         // end
    }

    answer = ()=>{
        // start
        this.setState((prevState)=>{
            const {display, input} = prevState;
            if(["-","+"].includes(display[display.length-1])){
                if(input < 0){
                  return { display: display.slice(0,-1) + input}
                } else{
                    return {display: display + input}
                }
            
            }
            if( display.endsWith("/") || display.endsWith("*") ){
                return { display: display + input}
            } 
        })
        // end
    }
    //End of Handling click buttons....
    render(){
        return (   
<div className="Container">
        <div>
            <div className="innerContainer">
              <div className="row">
                <div className="12" id="display">{this.state.display}</div>
                <div className="12" id="input">{this.state.input}</div>
              </div>
              <div className="row">
                <div className="col-3" id="clear" onClick={this.Clear}>AC</div>
                <div className="col-3" id="divide" onClick={this.Division}>/</div>
                <div className="col-3" id="multiply" onClick={this.Multiply}>X</div>
                <div className="col-3" id="delete" onClick={this.delete}>⌫</div>
              </div>
              <div className="row">
                <div className="col-3" id="seven" onClick={this.Seven}>7</div>
                <div className="col-3" id="eight" onClick={this.Eigth}>8</div>
                <div className="col-3" id="nine" onClick={this.Nine}>9</div>
                <div className="col-3" id="subtract" onClick={this.Substract}>-</div>
              </div>
              <div className="row">
                 <div className="col-3" id="four" onClick={this.Four}>4</div>
                <div className="col-3" id="five" onClick={this.Five}>5</div>
                <div className="col-3" id="six" onClick={this.Six}>6</div>
                <div className="col-3" id="add" onClick={this.Add}>+</div>
              </div>
              <div className="row pb-2">
                <div className="col-9 m-0 p-0">
                    <div className="row  m-0 p-0">
                        <div className="col-4" id="one" onClick={this.One}>1</div>
                        <div className="col-4" id="two" onClick={this.Two}>2</div>
                        <div className="col-4" id="three" onClick={this.Three}>3</div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col-4 m-0 p-0" id="zero" onClick={this.Zero}>0</div>
                        <div className="col-4 m-0 p-0" id="decimal" onClick={this.Decimal}>.</div>
                        <div className="col-4 m-0 p-0" id="answer" onClick={this.answer}>Ans</div>
                    </div>
                </div>
               <div className="col-3 m-0 p-0" id="equals" onClick={this.Equal}>=</div>
              </div>
            </div>
            <p>Prepared by: <em>Girma Gebre</em></p>
        </div>
    </div>
            
        )
    }
};

export default JavascriptClaculator;