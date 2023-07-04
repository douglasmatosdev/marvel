import React, { FC } from 'react'
import { HeroCardContainer } from './styled'

interface HeroCardProps {
    url: string
    name: string
}
const HeroCard: FC<HeroCardProps> = ({ url, name }) => {
    return (
        <HeroCardContainer>
            <img src={url} alt={name} />
            <div className="hero-name">
                {name}
            </div>
        </HeroCardContainer>
    )
}

export default HeroCard