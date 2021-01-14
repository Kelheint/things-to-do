const description = {
   description: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea por hacer'
   }
}

const complete = {
   complete: {
      default: true,
      alias: 'c',
      desc: 'Estado de la tarea por hacer (Completada/Hecha - Incompleta/No hecha)'
   }
}

const argv = require('yargs')
   .command('crear', 'Crea una nueva tarea por hacer', description)
   .command('actualizar', 'Actualiza las tareas por hacer', {
      options, 
      complete
   })
   .command('borrar', 'Elimina una tarea por hacer', description)
   .help()
   .argv;

module.exports = {
   argv
}