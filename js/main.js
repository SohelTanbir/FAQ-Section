$(document).ready(function(){
    
// toggle list item right icon of sidebar
$(".faq-header").click(toggleIcon);
function toggleIcon(){
    const activeElement =this.children[1].children;
    // toggle plus  and minus icon 
    activeElement[0].classList.toggle("hide");
    activeElement[1].classList.toggle("minus_icon");
}

})