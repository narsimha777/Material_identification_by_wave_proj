import Applayout from "./Components/Applayout.js";
import YModulus from './Components/YModulus.js';
import GModulus from './Components/GModulus.js';
import Temperature from './Components/Temperature.js';
import Temp from "./Components/Temp.js";
import Poisonratio from './Components/Poisonratio.js';
import Length from './Components/Length.js';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [y,sety] = useState();
  const [p,setp] = useState();
  const [g,setg] = useState();
  // const [dt, setdt] = useState();
  const [TOF, setTOF] = useState();
  const [Amp, setAmp] = useState();
  const [units, setUnits] = useState();
  const [length, setlength] = useState();
  const [temp, setTemp] = useState([]);
  const [TOFarr, setTOFarr] = useState([]);
  const [TOF2arr, setTOF2arr] = useState([]);
  const [dtarr, setdtarr] = useState([]);
  const [density, setDensity] = useState();
  const [Amparr, setAmparr] = useState([]);
  const [gradient, setGradient] = useState();
  const [intercept, setIntercept] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout sety={sety} length={length} setlength={setlength} density={density} setDensity={setDensity} TOF={TOF} setTOF={setTOF} Amp={Amp} setAmp={setAmp} units={units} setUnits={setUnits}/>}>
          <Route path="/youngsModulus" element={<YModulus TOF={TOF} length={length} density={density} units={units} y={y} sety={sety}/>} />
          <Route path="shearModulus" element={<GModulus TOF={TOF} length={length} density={density} units={units} g={g} setg={setg}/>} />
          <Route path="tempTOF" element={<Temp Amp={Amp} gradient={gradient} setGradient={setGradient} intercept={intercept} setIntercept={setIntercept} temp={temp} setTemp={setTemp} units={units} setUnits={setUnits} TOF2arr={TOF2arr} setTOF2arr={setTOF2arr} dtarr={dtarr} setdtarr={setdtarr}/>}/>
          <Route path="temp" element={<Temperature Amp={Amp} gradient={gradient} setGradient={setGradient} intercept={intercept} setIntercept={setIntercept} temp={temp} setTemp={setTemp} units={units} setUnits={setUnits} TOFarr={TOFarr} setTOFarr={setTOFarr} Amparr={Amparr} setAmparr={setAmparr}/>}/>
          <Route path="poisonratio" element={<Poisonratio y={y} g={g} p={p} setp={setp}/>} />
          <Route path="length" element={<Length units={units} TOF={TOF} y={y} density={density} setDensity={setDensity} sety={sety}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
