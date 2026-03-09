
//Mudar nome dessas variáveis para algo mais fácil de entender
const add_modal = document.querySelector(".add-itens-modal")
const open_add_modal = document.querySelector(".open-add-button")
const close_add_modal = document.querySelector(".end-add-function")
const conclusion_add_function = document.querySelector(".conclusion-add-function")

open_add_modal.addEventListener('click', () => {
    add_modal.show()
})

close_add_modal.addEventListener('click', () => {
    add_modal.close()
})


const add_form = document.getElementById('form')
const add_item_name = document.getElementById("add-item-name")
const add_item_quantity = document.getElementById("add-item-quantity")
const tabela = document.getElementById("tabela-corpo")

add_form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(add_item_name)
    const item_name = add_item_name.value.trim()
    console.log(item_name)

    add_modal.close()
})


