require('dotenv-safe').config()

const rp = require('request-promise')

const boards = {
    getAll(auth) {
        const options = addAuth(auth, {method: 'GET', uri: `${process.env.API_BASE}/teams/${auth.account_id}/boards`})
        return rp(options)
            .then((res) => JSON.parse(res))
            .catch((error) => {
                logError(options)
                throw error
            })
    },

    getById(auth, boardId) {
        const options = addAuth(auth, {method: 'POST', uri: `${process.env.API_BASE}/boards/${boardId}`})
        return rp(options)
            .then((res) => JSON.parse(res))
            .catch((error) => {
                logError(options)
                throw error
            })
    },
}

function addAuth(auth, options) {
    options.headers = {
        Authorization: `Bearer ${auth.access_token}`,
    }
    return options
}

function logError(options) {
    return (err) => {
        console.error(`\n\nError for ${options.uri}`)
        console.error(`Status code:`, err.statusCode)
        try {
            console.error(JSON.parse(err.error))
        } catch (e) {
            console.error(err.error)
        }
    }
}

module.exports = {
    oauth: oAuth,
    boards: boards,
}