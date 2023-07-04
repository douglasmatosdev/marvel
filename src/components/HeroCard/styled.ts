import styled from 'styled-components'

export const HeroCardContainer = styled.div`
    *,
    & {
        box-sizing: border-box;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    position: relative;
    overflow: hidden;

    height: 300px;
    width: 80%;

    @media (min-width: 420px) {
        width: 170px;
    }

    img {
        min-width: 96px;
        min-height: 96px;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        object-fit: cover;

    }
    img:hover {
        transform: scale(1.1);
        transform-origin: 50% 50%;
    }

    &::after {
        content: '';
        display:block;
        background: #202020;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40%;
    }
    &::before {
        content: '';
        display:block;
        background: #E62429;
        position: absolute;
        top: 180px;
        
        transition: all .5s ;
        z-index:1;
        width: 100%;
        height: 5px;
    }
    &:hover::before {
        height: 145px;
    }

    &:hover,
    &:active,
    &:focus {
        background-color: rgba(0, 0, 0, 0.15);
        .hero-id {
            color: #353f47;
        }
    }

    .hero-name {
        text-transform: capitalize;
        font-weight: 500;
        word-wrap: break-word;
        color: #fff;

        margin-top: auto;

        position: absolute;
        bottom: 50px;
        left: 10px;

        
        width: 100%;
        height: 20%;

        z-index: 1;
      
    }

    .hero-id {
        color: #aaa;
        font-size: 12px;
    }
`