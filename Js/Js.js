var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 4000);
        };

const myModal = new bootstrap.Modal(document.getElementById('modalId'), options);
const myModal1 = new bootstrap.Modal(document.getElementById('modalId1'), options);

function showpass(click){
    var show = document.getElementById("psw");
    if(show.type == "password"){
        click.Modal = "hide";
        show.type = "text";
    }
    else{
        show.type = "password";
    }
};


// function check(click){
//     var pass1 = document.getElementById("psw1") ;
//     var pass2 = document.getElementById("psw2");
//     if(pass1.innerText != pass2.innerText){
//         alert("Mat khau khong trung khop");
//     }
// }