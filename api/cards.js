import axios from 'axios';

const apiKey = "QVBJX0tFWTozNDhhMGY1NTE3NWY2ZTA5NTZiYjgyN2NhMjM4ODk1YTozZmZkM2U5M2VlMTA1NzVlMTFjMjIxMjcwY2FhNjRjMA"

const instance = axios.create({
    baseURL: "https://api-sandbox.circle.com",
});

function getInstance() {
    return instance
}

function getPCIPublicKey() {
    const url = '/v1/encryption/public'

    return instance.get(url, {headers: {
        Authorization: 'Bearer ' + apiKey
      }})
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