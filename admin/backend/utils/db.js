const monggose = require('mongoose')
const db_connect = async () =>  {
    try{
        if(process.env.mode === 'production'){
            await monggose.connect(process.env.db_production_url)
            console.log('production database connect')
        }else{
            console.log('ok')
            await monggose.connect(process.env.db_local_url)
            console.log('local database connect')
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = db_connect