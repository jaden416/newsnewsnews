window.onload = function(){

const navToggle = document.getElementById('toggle-button');
const navToggleA = document.getElementById('toggle-buttonA');
const nav = document.getElementById('primary-navigation');

navToggle.onclick = function(){
  const visiblity = nav.getAttribute("data-visible");

  if (visiblity === 'false'){

    document.body.style.overflow= "hidden"

    nav.setAttribute('data-visible', true)
    navToggleA.setAttribute('data-visible', true)

  } else {
    
    document.body.style.overflow= "visible"

    nav.setAttribute('data-visible', false)
    navToggleA.setAttribute('data-visible', false)
  }
  


} 
}
      
