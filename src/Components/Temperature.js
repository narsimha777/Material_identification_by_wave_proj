import React, { useState } from "react";
import Csvuploader from "./uploadcsv2";
import { regresseq, predicttemp } from "../utils/regres";
import Tempinput from "./tempinput";
import BasicLineChart from "./graphplot";

export default function Temperature({Amp, gradient, intercept, setIntercept ,setGradient, temp, setTemp, units, setUnits, TOFarr, setTOFarr, Amparr, setAmparr}) {
    const [row, setRow] = useState(1); 
    const [t, setT] = useState();
    const handleClick = async()=>{
      const result = await regresseq(temp, Amparr);
      // console.log(result);
      // console.log(result[0]);
      // console.log(result[1]);
      setGradient(result[0]);
      setIntercept(result[1]);
      // console.log(gradient);
      // console.log(intercept);
    }

    const handlePredict = async()=>{
      const res = await predicttemp(temp, Amparr, Amp);
      setT(res);
    }
    const [tablecontent, setTablecontent] = useState([
      <tr key={0}>
          <th scope="row">1</th>
          <td className="table-primary"><div class="input-group mb-1 w-50">
            <Tempinput setTemp={setTemp}/>
          </div></td>
          <td className="table-primary"><Csvuploader units={units} setUnits={setUnits} TOFarr={TOFarr} setTOFarr={setTOFarr} Amparr={Amparr} setAmparr={setAmparr}/></td>
      </tr>,
  ]);

  function Inrows() {
    setRow((prevRow) => prevRow + 1); 
    setTablecontent((prevContent) => [
      ...prevContent,
      <tr key={row}>
        <th scope="row">{row + 1}</th>
        <td className="table-primary"><div class="input-group mb-1 w-50">
            <Tempinput setTemp={setTemp}/>
          </div></td>
          <td className="table-primary"><Csvuploader units={units} setUnits={setUnits} TOFarr={TOFarr} setTOFarr={setTOFarr} Amparr={Amparr} setAmparr={setAmparr}/></td>
      </tr>,
    ]);
  }

  return (
    <div>
      <button className="slbt" onClick={Inrows}>
        +
      </button>
      <div id="tble">
        <table className="table table-dark table-striped">
          <thead>
            <tr className="table-primary">
              <th scope="col">S.No</th>
              <th scope="col">Temperature °C</th>
              <th scope="col">Upload Experimental CSV</th>
              {/* <th scope="col">Submit</th> */}
            </tr>
          </thead>
          <tbody>{tablecontent}</tbody>
        </table>
      </div>
      <div>
        {gradient&&intercept&&<h1 className="eqntyp">y = {gradient}*x+{intercept}</h1>}
        <div className="eqbtn">
          <button type="button" className="btn btn-danger w-50" onClick={handleClick}>Get Equation</button>
        </div>
        <div className="graph">
          <h1>TEMPERATURE - AMPLITUDE</h1>
          {temp&&Amparr&&<BasicLineChart temp={temp} Amparr={Amparr}/>}
        </div>
        <div className="eqbtn">
          {Amp&&<button type="button" onClick={handlePredict} className="btn btn-info w-50">
              Predict Temperature
          </button>}
        </div>
        {t&&<h1 className="eqntyp">{t[1]} °C</h1>}
      </div>
    </div>
  );
}
