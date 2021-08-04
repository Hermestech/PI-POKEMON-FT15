const { Type } = require('../db');
const {API_TYPES_ENDPOINT} = require('../constants')
const { default: axios } = require("axios");

async function getAllTypes(req, res, next){
    try {
        
        const type= await Type.findAll()
        
        if(type.length===0){
            const apitype = await axios.get(API_TYPES_ENDPOINT)
    
        await Promise.all(apitype.data.results.map((type, index)=>{
            let pokemonType = {
                id: ++index,
                name: type.name
            }
            Type.findOrCreate({where: pokemonType})
        }));
      };
       
        return Type.findAll()
        .then((types)=>
        res.send(types))
        .catch((err)=>next(err))

    } catch(error){
        next(error)
    }
}


// async function getApiTypes(req, res, next){
//     try {
//         const apiType = await axios(API_TYPES_ENDPOINT)
//         // await Promise.all(apiType.data.results.map((type, index) => {

//         //     let pokemonType = {
//         //         id: ++index,
//         //         name: type.name
//         //     }
//         // }))
//         res.status(200).json(apiType.data.results)
//     }
//     catch(error){
//         next(error)
//     }
// }

module.exports = {
    getAllTypes,
    // getApiTypes
}