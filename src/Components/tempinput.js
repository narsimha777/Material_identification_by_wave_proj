import React, { useState } from "react";

const Tempinput = ({setTemp})=>{
    const [val, setVal] = useState();
    const [disable, setDisable] = useState();
    const handleClick = () => {
        setDisable(true);
        setTemp((prev) => [...prev, val]);
    };
    return (
    <div className="tempinput">
            <span class="input-group-text" id="inputGroup-sizing-default">Temperature</span>
            <input type="number" class="form-control" value={val} onChange={(e)=>{setVal(e.target.value)}} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <button type="button" className="btn btn-success" disabled={disable} onClick={handleClick}>Submit</button>
    </div>)
}

export default Tempinput;