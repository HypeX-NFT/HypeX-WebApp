const openpgpModule = import('openpgp');

async function encrypt(dataToEncrypt, { keyId, publicKey }) {  
    const decodedPublicKey = atob(publicKey)
    const openpgp = await openpgpModule
    const options = {
        message: openpgp.message.fromText(JSON.stringify(dataToEncrypt)),
        publicKeys: (await openpgp.key.readArmored(decodedPublicKey)).keys,
}

    return openpgp.encrypt(options).then((ciphertext) => {
        return {
        encryptedMessage: btoa(ciphertext.data),
        keyId,
        }
    })
}

export default {
    encrypt,
}
