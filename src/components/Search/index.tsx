'use client'
import React, { useState, ChangeEvent, useCallback } from 'react'
import { SearchHeroContainer } from './styled'
import { RiSearch2Line } from 'react-icons/ri'
import ApiServices from '@/services/api'

interface SearchHeroProps {
    handleFilterHeros: (suggestions: Record<string, any>[]) => void
}

const SearchHero = ({ handleFilterHeros }: SearchHeroProps) => {
    const [inputValue, setInputValue] = useState({ hero: '' })
    const [suggestions, setSuggestions] = useState<Record<string, any>[]>([])
    const [focus, setFocus] = React.useState(false)

    const hanleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event?.target?.value
        setInputValue({ ...inputValue, hero: name })
        handle(name)
    }

    const getSuggestions = useCallback((name: string) => {
        ApiServices.searchHeros(name)
            .then(res => {
                const results = res.data.data.results
                handleFilterHeros(results)
                setSuggestions(results)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handle = useCallback((name: string) => {
        if (name.length <= 1) {
            setSuggestions([])
            handleFilterHeros([])
        } else {
            getSuggestions(name)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue])

    const handleOnClick = (suggestion: Record<string, any>) => {
        handleFilterHeros([suggestion])
        setSuggestions([])
        setInputValue({
            hero: suggestion.name
        })
    }

    // detect outside click
    React.useEffect(() => {
        if (focus) {
            window.addEventListener('click', (event: MouseEvent) => {
                //@ts-ignore
                if (event?.target?.name !== 'hero_input_search') {
                    setSuggestions([])
                    setFocus(false)
                }
            })
        }

        return () => {
            window.removeEventListener('click', () => {
                setFocus(false)
            })
        }
    }, [focus])

    return (
        <SearchHeroContainer>
            <div className="input-name">
                <div className="icon-search">
                    <RiSearch2Line />
                </div>
                <label htmlFor="hero_input_search">
                    <input
                        type="text"
                        name="hero_input_search"
                        value={inputValue.hero}
                        onChange={event => hanleInputChange(event)}
                        onFocus={() => {
                            setFocus(true)
                        }}
                    />
                </label>
            </div>
            {suggestions.length > 0 ? (
                <ul className="suggestions response-names">
                    {suggestions.map((suggestion, index) => {
                        return (
                            <li
                                key={`${suggestion.name}_${index}`}
                                onClick={() => handleOnClick(suggestion)}
                            >
                                {suggestion.name}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </SearchHeroContainer>
    )
}

export default SearchHero