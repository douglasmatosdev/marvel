'use client'
import React, { FC } from 'react'
import { HeroCardContainer } from './styled'
import Image from 'next/image'

interface HeroCardProps {
    url: string
    name: string
}
const HeroCard: FC<HeroCardProps> = ({ url, name }) => {
    return (
        <HeroCardContainer>
            <img
                src={url}
                alt={name}
                width={100}
                height={100}
            />
            <div className="hero-name">
                {name}
            </div>
        </HeroCardContainer>
    )
}

export default HeroCard