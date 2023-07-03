import axios from 'axios'
import md5 from 'md5'
import { marvelCredenditals } from '../Utils/secure'
import { MARVEL_URL } from '../Utils'

const api = axios.create({
    baseURL: MARVEL_URL
})

const { ts, apiKey, privateKey } = marvelCredenditals
const hash = md5(ts + privateKey + apiKey)
const ApiServices = {
    allHeros: async (offset: number, limit: number, searchHero: null | string, simulateError=false) => {
       return await api.get(`/characters?${searchHero ? `nameStartsWith=${searchHero}&` : ''}limit=${limit}&offset=${offset}&ts=${ts}&apikey=${apiKey}&hash=${hash}`)
    },
    searchHeros: async (name: string) => {
        return await api.get(`/characters?${name ? `nameStartsWith=${name}&` : ''}&ts=${ts}&apikey=${apiKey}&hash=${hash}`)
    }
}

export default ApiServices