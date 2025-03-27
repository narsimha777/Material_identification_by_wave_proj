import React from "react";

export default function Poisonratio({y, g, setp, p}){
    const getP =()=>{
        let pois = (y/(2*g))-1;
        setp(pois);
    }
    if(!y){
        return (<div  className="errpara">
            <p>Please! Upload CSV document</p>
        </div>)
    }else if(!y||!g){
        return (<div className="errpara">
            <p>Please! Calculate Young's and Shear Modulus values</p>
        </div>)
    }
    else{
        return (<div className="modulus">
            <h1 onClick={getP}>Poison's Ratio</h1>
            {p&&<h3 className="res">{p}</h3>}
        </div>);
    }
};