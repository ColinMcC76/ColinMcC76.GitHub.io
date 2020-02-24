const name = document.getElementById("name");
const button = document.querySelector("button")
const submit = document.querySelector("submit")



    

button.addEventListener('click', click);
function click() {
    let x = name
    console.log(x)
    let y = "Thanks for clicking the button, :x: ! I Hope that I can continue to add new and more advanced features as I continue to roll out developments."
    let z= y
    

    z.textContent = y.replace( ":x:" , "Colin")
    console.log(z)
}