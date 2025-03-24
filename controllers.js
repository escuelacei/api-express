
const { Curso } = require('./schema')

const getCursos = async ( req , res , next ) => {
    try{
        const buscar = await Curso.find()
        res.json(buscar)
    }catch(error){
        next( error )
    }
}
const postCursos = async ( req , res , next ) => {
    try{
        const { titulo , duracion , modalidad1 } = req.body

        const nuevo = new Curso({
            titulo,
            duracion,
            modalidad : [
                {
                    nombre : modalidad1
                }
            ]
        })
        await nuevo.save()

        const buscar = await Curso.find()

        res.json(buscar)
    }catch(error){
        next( error )
    }
}
const putCursos = async ( req , res , next ) => {
    try{
        const {_id , ...datos} = req.body

        await Curso.findByIdAndUpdate( _id , datos )

        const buscar = await Curso.find()

        res.json(buscar)
    }catch(error){
        next( error )
    }
}
const deleteCursos = async ( req , res , next ) => {
    try{
        const { caca } = req.params

        await Curso.findByIdAndDelete(caca)

        const buscar = await Curso.find()

        res.json(buscar)
    }catch(error){
        next( error )
    }
}
module.exports = {
    getCursos,
    postCursos,
    putCursos,
    deleteCursos
}