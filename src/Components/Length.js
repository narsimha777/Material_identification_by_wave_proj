import React, { useState } from "react";

export default function Length({TOF, y, sety, density, units, setDensity}){
    const [l, setL] = useState();
    const [d,setd] = useState();
    const [yg,setyg] = useState();
    const getl =()=>{
        let v = Math.sqrt(y/density);
        if(units){
            if(units.Time==="(ms)"){
                let l = v*TOF*10**-3;
                setL(l);
            }else{
                let l = v*TOF*10**-6;
                setL(l);
            }
        }
    }
    if(!units){
        return (<div className="errpara">
            <p>Please! Upload CSV document</p>
        </div>)
    }else if(!y){
        return (<div className="errpara">
            <p>Please! Calculate Young's Modulus</p>
        </div>)
    }else if(!density){
        return (<div className="errpara">
            <p>Please! Enter density values</p>
        </div>)
    }
    else{
        return (<div>
            <h1 className="modulus" onClick={getl}>Length</h1>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Density</span>
                    <input type="number" value={d} onChange={(e)=>{setd(e.target.value)}} placeholder="kg/m3" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    <button type="button" onClick={()=>setDensity(d)} className="btn btn-info">Submit</button>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Young's Modulus</span>
                    <input type="number" value={yg} onChange={(e)=>{setyg(e.target.value)}} placeholder="Pa" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    <button type="button" onClick={()=>sety(yg)} className="btn btn-info">Submit</button>
                </div>
            {l&&<h3 className="res">{l}</h3>}
        </div>);
    }
};