const openpgpModule = import('openpgp')

async function encrypt(dataToEncrypt, { keyId, publicKey }) {  
    const decodedPublicKey = atob(publicKey)
    const openpgp = await openpgpModule
    const options = {
      message: "",
      publicKeys: "",
    }
    console.log(openpgp)
    options.publicKeys = (await openpgp.key.readArmored(decodedPublicKey)).keys
    console.log(12)
    options.message = openpgp.message.fromText(JSON.stringify(dataToEncrypt))
    console.log(15)
  
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
  