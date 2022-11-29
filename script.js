$(document).ready(function(){
$("#fenq").validate({

    rules:{
        fname:{
                required:true,
                minlength:4
        },
        fmail:{
            required:true,
            email:true
        },
        fmob:{
            required:true,
            minlength:10
        }
    
    }

    

}) 
   


})
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
      } else {
        $('#toTopBtn').fadeOut();
      }
    });//scrolltop means content below coming top. it is happening when side bar moving down. then button fadein(start visible), else button(fadeout) hidden
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 2000);
      return false;
    });//animation.on click, scroll to top(scrollTop:0) with time 2sec
  });
 
 
      let box=document.querySelector("#fpo");
      let dhvalue=box.offsetHeight+20;
    console.log(dhvalue);
    document.getElementById("div2").style.paddingTop=dhvalue+"px"
  