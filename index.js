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
