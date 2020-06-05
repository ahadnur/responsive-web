window.addEventListener("scroll", function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggle() {
    const header = this.document.querySelector('header');
    header.classList.toggle('active');

}