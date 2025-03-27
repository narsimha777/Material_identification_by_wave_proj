import React from "react";

export default function GModulus({length, density, TOF, units, g, setg}){
    
    const getg = ()=>{
        if(units&&units.Time==='(ms)'){
            let calg = ((2*length/(TOF*(10**-3)))**2)*density;
            setg(calg);
        }else{
            let calg = ((2*length/(TOF*10**-6))**2)*density;
            setg(calg);
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
            <h1 className="modulus" onClick={()=>{getg()}}>Shear Young's Modulus</h1>
            {g&&<h3 className="res">{g} Pa</h3>}
        </div>)
    }
};