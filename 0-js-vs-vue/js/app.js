function UI(){
    this.todoText = document.querySelector("#todoText")
    this.addBtn = document.querySelector("#addBtn")
    this.todoList = document.querySelector("#todoList")
}

const ui = new UI();

ui.addBtn.addEventListener("click", () => {
    ui.todoList.innerHTML += `<li>${ui.todoText.value}</li>`
    ui.todoText.value = ""
})