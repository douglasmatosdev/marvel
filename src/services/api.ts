import axios from 'axios'
import { authenticationParam } from './secure'

// https://developer.marvel.com/documentation/authorization
export const MARVEL_URL='https://gateway.marvel.com/v1/public/'

const api = axios.create({
    baseURL: MARVEL_URL
})

const ApiServices = {
    allHeros: async (offset: number, limit: number, searchHero: null | string, simulateError=false) => {
       return await api.get(`/characters?${searchHero ? `nameStartsWith=${searchHero}&` : ''}limit=${limit}&offset=${offset}&${authenticationParam}`)
    },
    searchHeros: async (name: string) => {
        return await api.get(`/characters?${name ? `nameStartsWith=${name}&` : ''}&${authenticationParam}`)
    }
}

export default ApiServices