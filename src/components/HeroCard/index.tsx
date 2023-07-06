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
            <Image
                src={url}
                alt={name}
            />
            <div className="hero-name">
                {name}
            </div>
        </HeroCardContainer>
    )
}

export default HeroCard