// const container2 = document.getElementById('js-container');
// const highlight = document.getElementById('js-highlight');
// var container2Height;


// window.onscroll() {
//     container2Height = container2.offsetHeight - window.innerHeight;
//     container2Pos = container2.getBoundingClientRect();
//     diff = container2Height + container2Pos.top;
//     progressPercentage = diff / container2Height * 100;
//     cssWidth = Math.floor(100 - progressPercentage);
//     highlight.style.width = cssWidth+ "%";
// 
let btn9=document.getElementsByClassName("btn4")[0]
let img=document.getElementsByClassName("scroll")[0]
btn9.addEventListener('click',()=>{
    if (img.style.overflowY==="hidden") {
        img.style.overflowY="scroll"
        // btn9.style.display="none"
        btn9.innerHTML="See Less"
    }
    else{
        img.style.overflowY="hidden"
        // img.style.maxHeight="705px"
        btn9.innerHTML="See More"    
    }
})
