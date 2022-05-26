$(document).ready(function(){
    
// toggle list item right icon of sidebar
$(".faq-header").click(toggleIcon);
function toggleIcon(){
    const activeElement =this.children[1].children;
    // toggle plus  and minus icon 
    activeElement[0].classList.toggle("hide");
    activeElement[1].classList.toggle("minus_icon");
}

// show FAQ Answer
    $(".faq-header").click(showAnswer)
    function showAnswer(){
        // toggle ans
        $(".faq-body").slideToggle("show");
        
        // some style
        $(".faq-header").css({borderRadius:"5px 5px 0 0"})
        $(".faq-body").css({borderRadius:"0 0 5px 5px"})
    }


})