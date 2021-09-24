import axios from 'axios';
import apiKey from './apiKey';

const instance = axios.create({
    baseURL: "https://api-sandbox.circle.com",
});

function getInstance() {
    return instance
}

function getBalances() {
    const url = '/v1/balances';

    return instance.get(url, {headers: {
        Authorization: 'Bearer ' + apiKey
      }})
}

export default {
    getInstance,
    getBalances,
}