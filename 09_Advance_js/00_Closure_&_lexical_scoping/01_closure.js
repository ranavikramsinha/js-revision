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