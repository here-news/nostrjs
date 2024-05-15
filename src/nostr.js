// nostrKeys.js

// Convert Uint8Array to Hex String
export function toHexString(byteArray) {
    return Array.from(byteArray, byte => {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
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

export async function derivePublicKey(privateKey) {

    const publicKey = nobleSecp256k1.getPublicKey(privateKey, true); // Get compressed public key
    const publicKeyHex = toHexString(publicKey);
    const publicKeyWithoutPrefix = publicKeyHex.slice(2);
    return publicKeyWithoutPrefix;

}