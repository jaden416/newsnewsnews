window.onload = function(){


var icon = document.getElementById('toggle')


var count = 0;
    var n = 2


    icon.addEventListener("click", toggle);
  

    function toggle() {
      if (count === 0) {
        //Opens side bar
        document.getElementById("mySidebar").style.left = "0px";
        document.getElementById("main").style.marginLeft = "350px";
      
      }
         else if (count === 1) {
           //Closes sidebar
        document.getElementById("mySidebar").style.left = "-350px";
        document.getElementById("main").style.marginLeft= "0";
        count === 0;
         }

         
      count += 1;
      if (count === n)
      count = 0;

        }}
      
