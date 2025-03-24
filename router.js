const express = require('express')
const { getCursos, postCursos, putCursos, deleteCursos } = require('./controllers')
const router = express.Router()


    router.route(`/cursos`)
        .get( getCursos)
        .post( postCursos)
        .put( putCursos )
        
    router.route(`/cursos/_id/:caca`)
        .delete( deleteCursos )

    router.all('*' , ( req , res , next )=>{
        const error = new Error()
                error.status = 404
                error.message = `Endpoint no existe`
        next(error)
    })
    
    router.use(( error , req , res , next )=>{
        let { status , message } = error
            status  = status || 500
            message = message || `Error interno`
    
        res.status(status).json(message)
    })

module.exports = {
    router
}