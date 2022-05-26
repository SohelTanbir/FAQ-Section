$(document).ready(function () {

    
  // toggle list item right icon of sidebar
  $(".faq-header").click(toggleIcon);
  function toggleIcon() {
    const activeElement = this.children[1].children;
    activeElement[0].classList.toggle("hide");
    activeElement[1].classList.toggle("minus_icon");
  }

  // show FAQ Answer
  $(".faq-header").click(showAnswer);

  function showAnswer() {
    const targetElement = this.parentElement.children[1];

    const showItem = document.querySelector(".show");
   

    // remove show class from sub item
    if (!targetElement.classList.contains("show") && showItem) {
        const iconElement = showItem.parentNode.children[0].children[1].children;
        if(iconElement[0].classList.contains("hide")){
            iconElement[0].classList.remove("hide");
            iconElement[1].classList.toggle("minus_icon");
        }
        showItem.classList.remove("show");  
    }
    // toggle show class
    targetElement.classList.toggle("show");

    // some style
    $(".faq-header").css({ borderRadius: "5px 5px 0 0" });
    $(".faq-body").css({ borderRadius: "0 0 5px 5px" });
  }
});
