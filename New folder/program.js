const inputs = ['Pune','Chennai','Delhi','Mumbai','Ahemadabad','Delhi','Pune','Delhi'];
debugger;
const duplicates = inputs.filter((item, index) => index !== inputs.indexOf(item));
const more=duplicates.filter((item,index)=>index!==duplicates.indexOf(item));
// console.log(duplicates);
console.log(more);