const { readFile, writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start=async()=>{
    try{

        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-grenades.txt',`This is awesome: ${first} ${second}`,{flag:'a'})
        console.log(first, second);
    }catch(err){
        console.log(err)
    }
}

start()





// const getText=(path)=>{
// return new Promise((resolve, reject)=>{
// readFile(path,'utf8',(err,data)=>{
//     if(err){
//         reject(err)
//     }else{
//         resolve(data)
//     }
// })
// })
// }