const fs = require('fs');


let listToDo = [];

const saveDB = () => {
   let data = JSON.stringify(listToDo);

   fs.writeFile('./db/data.json', data, (err) => {
      if(err)  throw new Error('Error, no se pudo completar la acción correctamente', err);
   });
}

const loadDB = () => {
   try {
      listToDo = require('../db/data.json');
   } catch (error) {
      listToDo = [];
   }
}
 
const create = (description) => {
   loadDB();

   let toDo = {
      description,
      complete: 'false'
   };

   listToDo.push(toDo);

   saveDB();

   return toDo;
}

const getList = () => {
   loadDB();
   return listToDo
}

const update = (description, complete) => {
   loadDB();

   let index = listToDo.findIndex(task => {
      return task.description === description;
   })

   if(index >= 0){
      listToDo[index].complete = complete;
      saveDB();
      return true;
   }else{
      return false;
   }
}

const borrar = (description) => {
   loadDB();

   let index = listToDo.findIndex(task => {
      return task.description === description;
   })

   if(index >= 0){
      listToDo.splice(index, 1);
      saveDB();
      return true;
   }else{
      return false;
   }
}

module.exports = {
   create,
   getList,
   update,
   borrar
}