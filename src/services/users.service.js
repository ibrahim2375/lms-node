const sharp = require('sharp');
const fs = require('fs')

const methods = {
    async getUsers(data) {
        return new Promise(async (resolve, reject) => {
            try {
                
                resolve(true)
            } catch (error) {
                reject(methods.error(error.message, 400))
            }
        });
    }
}

module.exports = { ...methods }