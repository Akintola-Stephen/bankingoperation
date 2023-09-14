const { customAlphabet } = require('nanoid')

const functionDispatchers = {
    generateAccountNumber: () => {
        const nanoid = customAlphabet('1234567890', 10)
        return nanoid();
    }
}


module.exports = functionDispatchers