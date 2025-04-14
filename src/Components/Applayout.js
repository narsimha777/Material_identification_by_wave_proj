import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "../routes.js";
import CsvUploader from "./uploadcsv.js";
import { useState } from "react";

export default function Applayout({TOF, setTOF, Amp, setAmp, units, setUnits, length, setlength, density, setDensity}) {
    const [d,setd] = useState();
    const [l,setl] = useState();
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><NavLink className="nav-link active" aria-current="page" to={ROUTES.home()}>MATERIAL IDENTIFICATION APP©️</NavLink></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.youngsModulus()}>YoungsModulus</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.shearModulus()}>ShearModulus</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.temperature()}>Temperature</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.temp()}>Temperature-TOF</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.poisonratio()}>PoisonRatio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.length()}>Length</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="upld">
                <CsvUploader units={units} setUnits={setUnits} TOF={TOF} setTOF={setTOF} Amp={Amp} setAmp={setAmp}/>
            </div>
            <div className="inputgrps">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Density</span>
                    <input type="number" value={d} onChange={(e) => { setd(e.target.value) }} placeholder="kg/m3" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <button type="button" onClick={() => setDensity(d)} className="btn btn-info">Submit</button>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">length</span>
                    <input type="number" value={l} onChange={(e) => { setl(e.target.value) }} placeholder="m" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <button type="button" onClick={() => setlength(l)} className="btn btn-info">Submit</button>
                </div>
                {TOF && units && Amp && <div className="values">
                    <h3 className="value">TOF = {TOF}{units.Time}</h3>
                    <h3 className="value">AMPLITUDE @TOF = {Amp}{units['Channel A']}</h3>
                </div>}
            </div>
            <Outlet/>
            {/* <img src={image} style={{height:"300vh",width:"100%"}}/> */}
        </div>
    )
}