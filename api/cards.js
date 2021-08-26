import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api-sandbox.circle.com",
});

function getInstance() {
    return instance
}

function getPCIPublicKey() {
    const url = '/v1/encryption/public'

    return instance.get(url)
}

function createCard(payload) {
    const url = '/v1/cards'

    return instance.post(url, payload)
}

export default {
    getInstance,
    getPCIPublicKey,
    createCard,
}