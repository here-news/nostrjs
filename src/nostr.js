// nostr.js

// Convert Uint8Array to Hex String
export function toHexString(byteArray) {
    return Array.from(byteArray, byte => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
}


// Convert Hex String to Uint8Array
export function hexStringToUint8Array(hexString) {
    if (hexString.length % 2 !== 0) {
        throw new Error('Hex string must have an even length');
    }
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < hexString.length; i += 2) {
        byteArray[i / 2] = parseInt(hexString.substr(i, 2), 16);
    }
    return byteArray;
}

// Generate Nostr-compatible key pair
export async function generateNostrKeyPair() {
    const privateKey = nobleSecp256k1.utils.randomPrivateKey(); // Generate a private key
    const publicKey = nobleSecp256k1.getPublicKey(privateKey, true); // Get compressed public key

    const privateKeyHex = toHexString(privateKey);
    const publicKeyHex = toHexString(publicKey);

    // Remove the prefix byte from the public key
    const publicKeyWithoutPrefix = publicKeyHex.slice(2);

    return {
        privateKey: privateKeyHex,
        publicKey: publicKeyWithoutPrefix
    };
}
// Derive Nostr-compatible public key from private key
export async function derivePublicKey(privateKeyHex) {
    const privateKey = hexStringToUint8Array(privateKeyHex);
    const publicKey = nobleSecp256k1.getPublicKey(privateKey, true); // Get compressed public key
    const publicKeyHex = toHexString(publicKey).slice(2);

    return publicKeyHex;

}