const mongoose = require('mongoose')

const cursoSchema = new mongoose.Schema( 
    { titulo : String , duracion : String , modalidad : Array } , 
    { collection : 'cursos' , versionKey : false }
)

const Curso = mongoose.model('Curso' , cursoSchema )

module.exports = {
    Curso
}