var list = [{name:"Яблоки",price:2,amount:0},{name:"Бананы",price:5,amount:0},{name:"Груши",price:4,amount:0},{name:"Арбуз",price:10,amount:0}]
var basket = []
var main = document.getElementsByClassName("main")[0] 
var basket2 = document.getElementsByClassName("backet")[0]
var inputs = document.getElementsByTagName("input")
for(let i=0;i<list.length;i++){
    var product = document.createElement("div")
    product.classList.add("product")
    var name2 = document.createElement("span")
    name2.innerHTML = list[i].name
    var price2 = document.createElement("span")
    price2.innerHTML = list[i].price
    var amount2 = document.createElement("input")
    amount2.value = list[i].amount
    amount2.onchange = (event) => {addvalue(i,event) }
    var button = document.createElement("button")
    button.onclick = () => {addtobasket(i,{name:list[i].name,price:list[i].price,amount:list[i].amount})}
    button.innerHTML = "Добавить в корзину"
    product.appendChild(name2)
    product.appendChild(price2)
    product.appendChild(amount2)
    product.appendChild(button)
    main.appendChild(product)
} 
showBasket()
function addtobasket(i,item){
    basket.push(item)
    inputs[i].value = 0
    list[i].amount = 0
    showBasket()
}
function deleteGoods(i){
    basket.splice(i,1)
    showBasket()
}
function addvalue(i,event){
    list[i].amount = +event.target.value
}
function showBasket(){
    basket2.innerHTML = ""
    var totalAmount = 0
    for(let i=0;i<basket.length;i++){
        totalAmount = totalAmount + basket[i].price * basket[i].amount
    }
    var span2 = document.createElement("span")
    span2.innerHTML = 'Итоговая цена: ' + totalAmount
    basket2.appendChild(span2)
    for(let i=0; i<basket.length;i++){
        var div = document.createElement("div")
        div.classList.add("goods")
        var span = document.createElement("span")
        span.innerHTML = basket[i].name + " " + basket[i].price * basket[i].amount
        var button2 = document.createElement("button")
        button2.onclick = () => {deleteGoods(i)}
        button2.innerHTML = "Удалить из корзины"
        div.appendChild(span)
        div.appendChild(button2)
        basket2.appendChild(div)
    }
}
