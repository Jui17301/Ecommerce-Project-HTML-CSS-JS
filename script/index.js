

document.getElementById('menu-icon').addEventListener('click',function(){
 
  const menu =  document.getElementById('menu');

  
 if(menu.className = ' hidden'){
  menu.classList.remove("hidden");
 }
 else{
  menu.classList.add("hidden");
 }
  
  
})