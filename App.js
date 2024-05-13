const sidebar=document.querySelector('.side_bar');
const toggleButton=document.getElementById("function_toggle_button");
const closeBtn=document.querySelector(".bx-chevron-left");
// console.log(sidebar, toggleButton, closeBtn);

toggleButton.addEventListener('click', ()=>{
    sidebar.classList.toggle("show_time");
});

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove("show_time");
})