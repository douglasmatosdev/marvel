'use client'
import React, { FC, Fragment, useState, useEffect, useCallback, useRef } from 'react'
import { DashboardContainer } from './styled';

import ApiServices from '@/services/api'
import { verifyApiKey } from '@/services/secure'
import HeroCard from '@/components/HeroCard';

import SeachHeroContainer from '@/components/Search'

const Dashboard: FC = () => {
    const limit = 10
    const [lastIndex, setLastIndex] = useState(4)
    const [heros, setHeros]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(limit)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const herosRef = useRef(heros)

    const setPagination = useCallback((offset = 0) => {
        if (verifyApiKey()) {
            ApiServices.allHeros(offset, limit, null)
                .then(res => {
                    const data = res.data.data
                    setLastIndex(data.total)
                    let temp = [...heros, ...data.results]
                    herosRef.current = temp
                    setHeros(temp)

                    setLoading(false)
                })
        }
    }, [heros])

    useEffect(() => {
        setPagination(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (maxIndex === heros?.length) {
            setPagination(maxIndex)
        }
    }, [minIndex, maxIndex, heros, setPagination])

    const handleFilterHeros = useCallback((suggestions: Record<string, any>[]) => {
        if (suggestions.length === 0) {
            setHeros(herosRef.current)
        } else {
            setLastIndex(suggestions.length)
            setHeros(suggestions)
        }
    }, [])

    return (
        <DashboardContainer>
            {!loading ? (
                <Fragment>
                    <SeachHeroContainer
                        handleFilterHeros={handleFilterHeros}
                    />

                    <div className="heros-container">
                        <div className="heros-list">
                            {heros?.map((char: any, i: number) => {
                                if (i >= minIndex && i < maxIndex) {
                                    return (
                                        <div
                                            key={char.id}
                                            className="hero-box"
                                        >
                                            <HeroCard
                                                url={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                                                name={char.name}
                                            />
                                        </div>
                                    )
                                }
                            }
                            )}
                        </div>
                        <div className="pagination-container">
                            <div
                                className="pagination-button pagination-back"
                                onClick={() => {
                                    if (minIndex > 0) {
                                        setMaxIndex(minIndex)
                                        setMinIndex(minIndex - limit)
                                        setPageCount(pageCount - 1)
                                    }
                                }}
                            >
                                {'< Back'}
                            </div>
                            <div className="page-counter">
                                {pageCount + 1} / {lastIndex}
                            </div>
                            <div
                                className="pagination-button pagination-next"
                                onClick={() => {
                                    if (maxIndex < lastIndex) {
                                        setMinIndex(maxIndex)
                                        setMaxIndex(maxIndex + limit)
                                        setPageCount(pageCount + 1)
                                    }
                                }}
                            >
                                {'Next >'}
                            </div>

                        </div>
                    </div>
                </Fragment>
            ) : (
                <h1>Carregando...</h1>
            )}
        </DashboardContainer>
    )
}

export default Dashboard