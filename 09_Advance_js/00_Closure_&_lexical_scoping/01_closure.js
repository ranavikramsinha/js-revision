function outer(x){
    return function inner(y){
        return x+y
    }
}

const result = outer(2)
console.log(result(5)) //* 7

// const result = outer(2)(5)
// console.log(result) //* 7

function loadBalance(){
    let userBalance = 100
    console.log(userBalance)

    function addBalance(){
        let newValue = ++userBalance
        return newValue
    }

    return {addBalance}
}

const balance = loadBalance()
console.log(loadBalance())
console.log(balance.addBalance())
console.log(balance.addBalance())
console.log(balance)
console.log(balance.addBalance())
console.log(loadBalance().addBalance())
console.log(loadBalance())
console.log(loadBalance())