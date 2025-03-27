import React from "react";

export default function YModulus({length, density, TOF, units, y, sety}){
    
    const gety = ()=>{
        if(units&&units.Time==='(ms)'){
            let caly = ((2*length/(TOF*(10**-3)))**2)*density;
            sety(caly);
        }else{
            let caly = ((2*length/(TOF*10**-6))**2)*density;
            sety(caly);
        }
    }
    if(!units){
        return (<div  className="errpara">
            <p>Please! Upload CSV document</p>
        </div>)
    }
    else if(!density||!length){
        return (<div className="errpara">
            <p>Please! Enter Density and length values</p>
        </div>)
    }
    else{
        return (<div>
            <h1 className="modulus" onClick={()=>{gety()}}>Young's Modulus</h1>
            {y&&<h3 className="res">{y} Pa</h3>}
        </div>)
    }
};