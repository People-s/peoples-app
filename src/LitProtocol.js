
import LitJsSdk from 'lit-js-sdk'


// Need to start lit client with this function, then use encryptSaveMessage to encrypt a message
// then decryptMessage to recover the message

export async function startClient() {
    const client = new LitJsSdk.LitNodeClient()
    await client.connect()
    window.litNodeClient = client
}



// Function to make a signature
export async function checkAndSignAuthMessage(chain) {

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: chain })

    return authSig;
}


export async function encryptString(authSig, accessControlConditions, chain, message) {
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
        message
    );

    const encryptedSymmetricKey = await window.litNodeClient.saveEncryptionKey({
        accessControlConditions,
        symmetricKey,
        authSig,
        chain,
    });

    return { encryptedSymmetricKey, symmetricKey, encryptedString };
}

// example conditions for users that at least have 1 token to decrypt a message

// const accessControlConditions = [
//     {
//         contractAddress: '0x319ba3aab86e04a37053e984bd411b2c63bf229e',
//         standardContractType: 'ERC721',
//         chain,
//         method: 'balanceOf',
//         parameters: [
//             ':userAddress'
//         ],
//         returnValueTest: {
//             comparator: '>',
//             value: '0'
//         }
//     }
// ]



// Function to encrypt a message, the conditions to decrypt, chain and the message

export async function encryptSaveMessage(accessControlConditions, chain, message) {

    // await startClient();

    const authSig = await checkAndSignAuthMessage(chain);

    // const chain = 'rinkeby';

    const { encryptedSymmetricKey, symmetricKey, encryptedString } = await encryptString(authSig, accessControlConditions, chain, message);

    console.log(encryptedSymmetricKey);
    console.log(symmetricKey);
    console.log(encryptedString);

    // encryptedSymmetricKeyG = encryptedSymmetricKey;
    // symmetricKeyG = symmetricKey;
    // encryptedStringG = encryptedString;

    return { encryptedSymmetricKey, symmetricKey, encryptedString };

}


// Function to decrypt the message, you need the conditions to decrypt,  the
//  results of the encryptSaveMessage (encryptedSymmetricKey,encryptedString) and the chain

export async function decryptMessage(accessControlConditions, encryptedSymmetricKey, encryptedString, chain) {

    const authSig = await checkAndSignAuthMessage(chain);
    // const chain = 'rinkeby';

    const symmetricKey = await window.litNodeClient.getEncryptionKey({
        accessControlConditions,
        // Note, below we convert the encryptedSymmetricKey from a UInt8Array to a hex string.  This is because we obtained the encryptedSymmetricKey from "saveEncryptionKey" which returns a UInt8Array.  But the getEncryptionKey method expects a hex string.
        toDecrypt: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16"),
        chain,
        authSig
    })

    const decryptedString = await LitJsSdk.decryptString(
        encryptedString,
        symmetricKey
    );

    return decryptedString;
}

