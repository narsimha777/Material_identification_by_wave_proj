import React, { useState } from 'react';
import Papa from 'papaparse';

const CsvUploader2 = ({setTOF2arr, setdtarr, units, setUnits}) => {
    const [disable, setDisable] = useState(false);
    const [data, setData] = useState([]);
  // Function to handle CSV file upload and parse it using PapaParse
    const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('Please upload a CSV file');
      return;
    }
    if (file.type !== 'text/csv') {
      alert('Invalid file format. Please upload a CSV file');
      return;
    }

    // Use PapaParse to parse the CSV file
    Papa.parse(file, {
      complete: (result) => {
        // console.log('Parsed Data:', result.data);
        setData(result.data);
        // console.log(data);
      },
      header: true,
      skipEmptyLines: true,
    });
  };

//   const gettime_amp=()=>{
//     let time_amp = [];
//     let maxamp = 0;
//     let d = data.slice(20000);
//     setUnits(data[0]);
//     // console.log(units);
//     d.forEach((o)=>{
//         if(o['Channel A']>maxamp){
//             maxamp = o['Channel A'];
//             time_amp = o;
//     }});
//     // console.log(time_amp);
//     setAmp(time_amp['Channel A']);
//     setTOF(time_amp.Time);
//   }

  const getdt=()=>{
    let time_amp = [];
    let maxamp = 0;
    let d = data.slice(20000);
    setDisable(true);
    setUnits(data[0]);
    let te = 0;
    let tr = 0;
    // console.log(units);
    d.forEach((o)=>{
        if(o['Channel A']>maxamp){
            maxamp = o['Channel A'];
            if(o.Time-te>=20){
              tr = te;
            }
            te = o.Time;
            time_amp = o;
    }});
    // console.log(time_amp);
    // console.log(te);
    // console.log(tr);
    // console.log(dt);
    let t = te - tr;
    console.log(t);
    // console.log(dt);
    setdtarr((prev) => [...prev, t]);
    setTOF2arr((prev) => [...prev, time_amp.Time]);   
  }
  return (
    <div>
      <h2>Upload a CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {/* <button onClick={gettime_amp}>Time_Amp</button> */}
      <button disabled={disable} onClick={getdt}>ΔT</button>
    </div>
  );
};

export default CsvUploader2;
