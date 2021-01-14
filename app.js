const argv = require('./config/yargs').argv;
const colors = require('colors');
const {create, getList, update, borrar} = require('./to-do/to-do');


let command = argv._[0];

switch(command){
   case 'crear':
      let tasks = create(argv.description);
      console.log(tasks);
   break;

   case 'listar':
      let list = getList();

      for(task of list){
         console.log('========== To Do =========='.green);
         console.log(task.description);
         console.log('Estado: ', task.complete);
         console.log('==========================='.green);
      }
   break;

   case 'actualizar':
      let updated = update(argv.description, argv.complete);
      console.log(updated);
   break;

   case 'borrar':
      let borrado = borrar(argv.description);
      console.log(borrado);
   break;

   default:
      console.log('El comando no es reconocido');
}