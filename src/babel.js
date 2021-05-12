async function start() {
    return await Promise.resolve('async is working')
}

start().then(value => console.log(value))

// const unused = 42

class Util {
    static id = Date.now()
}

console.log('Util Id:', Util.id)