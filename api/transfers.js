import axios from 'axios';
import apiKey from './apiKey';

const instance = axios.create({
    baseURL: "https://api-sandbox.circle.com",
});

function getInstance() {
    return instance
}

function transferToBlockchain(payload) {
    const url = "/v1/transfers"

    return instance.post(url, payload, {headers: {
        Authorization: 'Bearer ' + apiKey
      }})
}

export default {
    getInstance,
    transferToBlockchain,
}