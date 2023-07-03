/**
 * To start the application, you must first obtain the Marvel plublic key and
 * private key. To do this, go to https://developer.marvel.com/ create account,
 * then go to https://developer.marvel.com/documentation/authorization for more details.
 */

const API_KEY_NOT_FOUND = 'YOUR API KEY NOT FOUND'
const MARVEL_API_PUBLIC_KEY = '0898f8da6bdf476efce9387281f03f3f' // Your Marvel api plublic key
const MARVEL_API_PRIVATE_KEY = '913efbe461ee8ff143635ace5fc5544cc8b9ff7b' // Your Marvel api private key

export const marvelCredenditals = {
    ts: new Date().getTime(), // ts - a timestamp (or other long string which can change on a request-by-request basis)
    apiKey: MARVEL_API_PUBLIC_KEY, 
    privateKey: MARVEL_API_PRIVATE_KEY 
}

export function verifyApiKey() {
    return (String(MARVEL_API_PUBLIC_KEY === String(API_KEY_NOT_FOUND)) || String(MARVEL_API_PRIVATE_KEY === String(API_KEY_NOT_FOUND)))
}