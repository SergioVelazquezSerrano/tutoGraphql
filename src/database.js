const mongoose = require('mongoose');

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{
            useNewUrlParser: true
        })
        console.log(">>>DB conectada");
    }catch{
        console.log(">>>Algo fue Mal");
    }
}
