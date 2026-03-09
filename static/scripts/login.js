function login () {
    const buttonlogin = document.getElementById("botaologin")

    const usernameInput = document.getElementById("usernameInput")
    const passwordInput = document.getElementById("passwordInput")

    console.log(`Nome de usuário: ${usernameInput.value}\nSenha: ${passwordInput.value}`)

    alert("Logando...")
    console.log("Redirecionando para index.html")
    window.location.replace("/index.html")
}