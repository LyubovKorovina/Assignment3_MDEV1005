import { useRef, useState } from "react"

const Calculator = () => {

    const [output, setOutput] = useState("")
    const calculate = () => {

        var checkResult = ''
        if(output.includes('--')) {
          checkResult = output.replace('--', '+')
        } else {
          checkResult = output;
        }
    
        try {
            setOutput((eval(checkResult) || "") + "")
          
        } catch(e) {
          
            setOutput("error")
        }
    };

    const reset = () => {
        setOutput("")
    }

    const backspace = () => {

        setOutput(output.slice(0, -1))
    };

    const handleClick = (event) => {
        let clickedValue = event.target.innerHTML
        
        if(clickedValue === "=") {
            calculate();
          }
          else if(clickedValue === "clear") {
            reset();
          }
          else if(clickedValue === "delete") {
            backspace();
          }
          else {
            setOutput(output + clickedValue)
          }
          
    }

    return <>

    <h3>Calculator</h3>
    
    <div className="card p-5">

        <div className="d-flex flex-column card p-3 border border-2 ">
        <div className="row mr-3">
            <div className="col-md-9">
            <input className="form-control  " disabled value={output} name="output" onChange={() => {
                setOutput(output)                
            }} type="text"  />
            </div>
        </div>
        
        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>1</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>2</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>3</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>+</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>4</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>5</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>6</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>-</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>7</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>8</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>9</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>*</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>/</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>0</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>=</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>clear</button>
        </div>

        <div className="row m-2">
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>.</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>{"("}</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>{")"}</button>
            <button className="btn btn-md btn-outline-primary col-md-2 mx-1" onClick={(event) => {
                handleClick(event)
            }}>{"delete"}</button>
        </div>
        </div>
    </div>
    </>
}

export default Calculator