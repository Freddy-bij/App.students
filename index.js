// selectRow = null

function addInputbutton (){
document.querySelector('#fist-name').value ="";
document.querySelector('#last-name').value ="";
document.querySelector('#grade').value ="";
 

}

document.querySelector('button').addEventListener('click', e =>{
    e.preventDefault();
  const firstName =  document.querySelector('#fist-name').value;
const lastName = document.querySelector('#last-name').value;
const grade = document.querySelector('#grade').value;

if(firstName == "" || lastName=="" || grade == ""){
    createAndShowNoctification('please form must be provided')
}else{
    if(firstName > "" || lastName > "" || grade > ""){
      const list = document.querySelector('tbody')
      const row = document.createElement('tr');

      row.innerHTML=`
      
       <th>${firstName}</th>
        <th>${lastName}</th>
        <th>${grade}</th>
        <th>
         <a href="" class="ed">Edit</a>
         <a href="" class="del">Delete</a>
         </th>
      `
      list.append(row);
    //   selectRow = null
      createAndShowNoctification('student added seccefull')
}
}
})

document.querySelector('tbody').addEventListener('click' , e =>{
    e.preventDefault();
   if(e.target.classList.contains('ed')){
    e.target.parentElement.parentElement
   }
    
})

function createAndShowNoctification(message){
    const div = document.createElement('div');
    div.className = 'notification';
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    container.insertBefore(div,main)
    setTimeout(() => document.querySelector('.notification').remove(),2000)
}
 document.querySelector('tbody').addEventListener('click', e=>{
    e.preventDefault();
     if(e.target.classList.contains('del')){
        e.target.parentElement.parentElement.remove();
        createAndShowNoctification('student deleded')
     }


 })
