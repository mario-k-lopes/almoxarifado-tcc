
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
    const item_quantity = add_item_quantity.value.trim()

    console.log(item_name)
    console.log(item_quantity)

    if(item_name == "" || item_quantity == "") {
        alert("Preencha todos os campos")
        return
    } else if(item_quantity < 0) {
        alert("Quantidade adicionada não pode ser menor que 0")
        return
    }

    // Criar nova linha na minha belíssima tabela™
    const new_line = document.createElement("tr")

    //Criar novas colunas
    const td_name = document.createElement("td")
    const td_quantity = document.createElement("td")

    // "Seta" o atributo dos itens
    td_name.textContent = item_name
    td_quantity.textContent = item_quantity

    // Envia a maçaroca para a belíssima tabela™
    new_line.appendChild(td_name)
    new_line.appendChild(td_quantity)

    tabela.appendChild(new_line)

    // Fecha aquele pop-up feoso
    add_modal.close()
})


