
//Mudar nome dessas variáveis para algo mais fácil de entender
const add_modal = document.querySelector(".add-itens-modal")
const open_add_modal = document.querySelector(".open-add-button")
const close_add_modal = document.querySelector(".end-add-function")
const conclusion_add_function = document.querySelector(".conclusion-add-function")

const request_modal = document.querySelector(".request-itens-modal")
const open_request_modal = document.querySelector(".open-request-button")
const close_request_modal = document.querySelector(".end-request-function")
const conclusion_request_function = document.querySelector(".conclusion-request-function")

open_add_modal.addEventListener('click', () => {
    add_modal.show()
})

close_add_modal.addEventListener('click', () => {
    add_modal.close()
})


const tabela = document.getElementById("tabela-corpo")

const add_form = document.getElementById('add-form')
const add_item_name = document.getElementById("add-item-name")
const add_item_quantity = document.getElementById("add-item-quantity")

add_form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(add_item_name)
    const item_name = add_item_name.value.trim()
    const item_quantity = add_item_quantity.value.trim()

    console.log(item_name)
    console.log(item_quantity)

    if (item_name == "" || item_quantity == "") {
        alert("Preencha todos os campos")
        return
    } else if (item_quantity < 0) {
        alert("Quantidade adicionada não pode ser menor que 0")
        return
    }

    // Criar nova linha na minha belíssima tabela™
    const new_line = document.createElement("tr")

    //Criar novas colunas
    const td_id = document.createElement("td")
    const td_name = document.createElement("td")
    const td_quantity = document.createElement("td")
    const td_requisitar = document.createElement("td")
    const td_requisitar_button = document.createElement("button")


    // "Seta" o atributo dos itens
    td_id.textContent = tabela.rows.length + 1
    td_name.textContent = item_name
    td_quantity.textContent = item_quantity
    td_requisitar_button.textContent = "Requisitar"
    td_requisitar.appendChild(td_requisitar_button)

    // Envia a maçaroca para a belíssima tabela™
    new_line.appendChild(td_id)
    new_line.appendChild(td_name)
    new_line.appendChild(td_quantity)
    new_line.appendChild(td_requisitar)

    tabela.appendChild(new_line)

    // Fecha aquele pop-up feoso
    add_modal.close()
})

const request_form = document.getElementById('request-form')
let requested_item_name = document.getElementById("requested-item-name")
let requested_item_id = document.getElementById("requested-item-id")
let requested_item_quantity = document.getElementById("requested-item-id")
const request_item_quantity = document.getElementById("request-item-quantity")

// Terminar a função de requisição de items na tabela
// Modal não está aparecendo corretamente

function request_show_modal(id) {
    request_modal.show()
    const item_name = document.getElementById(`item_name-${id}`)
    const item_quantity = document.getElementById(`item_quantity-${id}`)
    requested_item_name.textContent = item_name.innerHTML
    requested_item_quantity.textContent = item_quantity.innerHTML
    
}

function request_close_modal(id) {
    request_modal.close()
}




function request_item(requested_item_id) {

    //request_modal.show()

    console.log(`Executando request_item(${requested_item_id})`)
    console.log(requested_item_id)

    const item_name = document.getElementById(`item_name-${requested_item_id}`).textContent
    let item_quantity = document.getElementById(`item_quantity-${requested_item_id}`).textContent
    const requested_item_quantity = document.getElementById("request-item-quantity").value

    console.log(`Item requisitado: ${item_name}`)
    console.log(`Quantidade no estoque: ${item_quantity}`)
    console.log(`Quantidade requisitada: ${requested_item_quantity}`)

    if (item_quantity == "") {
        alert("Quantidade precisa ser informada")
        return
    } else if(requested_item_quantity > item_quantity) {
        alert("Quantidade requisitada não pode ser menor que a quantidade disponível no estoque")
        return
    }

    // "Seta" o atributo dos itens
    document.getElementById(`item_quantity-${requested_item_id}`).textContent = item_quantity - +requested_item_quantity

    console.log(`Nova quantidade: ${item_quantity - +requested_item_quantity}`)

    // Fecha aquele pop-up feoso
    request_modal.close()
}
