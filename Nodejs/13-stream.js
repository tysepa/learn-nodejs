const {readFile} = require('fs');
const { reject } = require('lodash');

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8',(err, data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

const start= async( )=>{
    try{

        const first = await getText('./content/first.txt');
        console.log(first)
    }catch(error){
        console.log(error)
    }

}
start()
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=> console.log(err))