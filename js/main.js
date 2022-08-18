// Start of SideBar 
var headerBtn = document.querySelector(".site-header-part__btn")

var siteHeader = document.querySelector("#site-header")

headerBtn.addEventListener("click", ()=> {
siteHeader.classList.toggle("sitenav-on")
})
// End of SideBar 

// Start Modal Window

var formBtn = document.querySelector(".accardion-part__btn")
var modal = document.querySelector(".modal")
var closeModalBtn = document.querySelector(".modal-part__desktop-link")

formBtn.addEventListener("click", ()=>{
    modal.classList.add("modal-on")
})

closeModalBtn.addEventListener("click", ()=> {
    modal.classList.remove("modal-on")
})
// End of Modal Window