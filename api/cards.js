import axios from 'axios';
import apiKey from './apiKey';

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

    return instance.post(url, payload, {headers: {
        Authorization: 'Bearer ' + apiKey
      }})
}

export default {
    getInstance,
    getPCIPublicKey,
    createCard,
}