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

function createPayment(payload) {
    const url = '/v1/payments'
    
    return instance.post(url, payload, {headers: {
        Authorization: 'Bearer ' + apiKey
      }})
}

export default {
    getInstance,
    getPCIPublicKey,
    createPayment,
}