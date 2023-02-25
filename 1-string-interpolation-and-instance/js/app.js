function UI(){
    this.h1 = document.querySelector("h1")
    this.p = document.querySelector("p")
    this.a = document.querySelector("a")
    //this.changeTitleBtn = document.querySelector(".changeTitleBtn")
}

const ui = new UI();

window.addEventListener("load", () => {
    ui.h1.innerHTML = "Caption"
    ui.p.innerHTML = "Text"
    ui.a.setAttribute("href", "https://www.gurkanatik.com.tr")
    ui.a.innerHTML = "Gurkan Atik"
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("changeTitleBtn")) {
        ui.h1.innerHTML = e.target.getAttribute('data-title')
    }
})