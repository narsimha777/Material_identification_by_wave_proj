const csv = require('csv-parser');
const fs = require('fs');

const getTofs = {
    getdata(){   
        return new Promise((resolve, reject)=>{
            let results = [];
            fs.createReadStream('./src/excelfiles/AL_L1_WAVE.csv')
            .pipe(csv())
            .on('data', (data)=>results.push(data))
            .on('end', ()=>{
                // console.log(results);
                let time_amp = [];
                let d = results.slice(20000);
                let maxamp = 0;
                d.forEach((o)=>{
                    if(o['Channel A']>maxamp){
                        maxamp = o['Channel A'];
                        time_amp = o;
                }});
                console.log(time_amp);
                // let prev = 0;
                resolve(time_amp);
                }).on('error', (error)=>{
                    reject(error);
                });
        })
    },
    // getPeaks(){
        // const data = [];
        // let prev = 0;
        // for(let i =20000;i<res.length;i+=20000){
        //     data.push(res.slice(prev, i));
        //     console.log(data);
        //     prev = i;
        // }
        // return data;
    // },
}

getTofs.getdata();

