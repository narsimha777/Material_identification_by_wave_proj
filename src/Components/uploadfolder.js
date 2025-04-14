import React, { useState } from 'react';

function FolderUpload() {
  const [files, setFiles] = useState([]);

  const handleFolderUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const csvFiles = uploadedFiles.filter(file => file.name.endsWith('.csv'));

    const [datas, setDatas] = useState([]);
    setFiles(csvFiles);

    
    // Example: Reading each CSV file
    csvFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log(`Contents of ${file.name}:`);
                console.log(event.target.result); // CSV content
            };
            reader.readAsText(file);
        });
    };

    files.map(file => (
        Papa.parse(file, {
            complete: (result) => {
                // console.log('Parsed Data:', result.data);
                setDatas((prev)=>[...prev, result.data]);
                // console.log(data);
            },
            header: true,
            skipEmptyLines: true,
            })
    //   <li key={file.name}>{file.name}</li>
    ))

    const gettime_amp=()=>{
        let time_amp = [];
        let maxamp = 0;
        datas.map((data)=>(
            let d = data.slice(20000);
            setUnits(data[0]);
            // console.log(units);
            d.forEach((o)=>{
                if(o['Channel A']>maxamp){
                    maxamp = o['Channel A'];
                    time_amp = o;
            }});
        ))
        // console.log(time_amp);
        setAmp(time_amp['Channel A']);
        setTOF(time_amp.Time);
      }

    return (
      <div>
        <h2>Upload a Folder with CSV Files</h2>
        <input
          type="file"
          webkitdirectory="true"
          mozdirectory="true"
          onChange={handleFolderUpload}
          multiple
        />
        <button onClick={gettime_amp}>Time_Amp</button>
        <ul>
          {};
        </ul>
      </div>
    );
}

export default FolderUpload;
