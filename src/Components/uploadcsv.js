import React, { useState } from 'react';
import Papa from 'papaparse';
const CsvUploader = ({setTOF, setAmp, units, setUnits}) => {

  const [data, setData] = useState([]);
  // Function to handle CSV file upload and parse it using PapaParse

  // files.map(file=>())
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

  const gettime_amp=()=>{
    let time_amp = [];
    let maxamp = 0;
    let d = data.slice(20000);
    setUnits(data[0]);
    // console.log(units);
    d.forEach((o)=>{
        if(o['Channel A']>maxamp){
            maxamp = o['Channel A'];
            time_amp = o;
    }});
    // console.log(time_amp);
    setAmp(time_amp['Channel A']);
    setTOF(time_amp.Time);
  }

  return (
    <div>
      <h2>Upload a CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={gettime_amp}>Time_Amp</button>
    </div>
  );
};

export default CsvUploader;
