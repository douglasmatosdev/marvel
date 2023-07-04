/**
 * To start the application, you must first obtain the Marvel plublic key and
 * private key. To do this, go to https://developer.marvel.com/ create account,
 * then go to https://developer.marvel.com/documentation/authorization for more details.
 */

import md5 from "md5"

export const API_KEY_NOT_FOUND = String(process.env.NEXT_PUBLIC_API_KEY_NOT_FOUND)

export const MARVEL_API_PUBLIC_KEY = String(process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY)

export const MARVEL_API_PRIVATE_KEY = String(process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY)

export const timestamp = new Date().getTime() // ts - a timestamp (or other long string which can change on a request-by-request basis)

export const hash = md5(timestamp + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY)

export const authenticationParam = `ts=${timestamp}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${hash}`

export function verifyApiKey(): boolean {
    return !!(MARVEL_API_PUBLIC_KEY && MARVEL_API_PRIVATE_KEY || API_KEY_NOT_FOUND)
}