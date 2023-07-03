import styled from 'styled-components'

export const SearchHeroContainer = styled.div`
    *,
    & {
        box-sizing: border-box;
    }

    display: flex;
    flex-direction: column;
    margin: 20px 0;
    position: relative;

    .icon-search {
        margin: 0;
        padding: 0;
        width: 24px;
        height: 24px;

        position: absolute;
        top: 8px;
        left: 2px;

        font-size: 18px;
    }
    
    .input-name {
        position: relative;
        input {
            width: 100%;
            height: 35px;

            padding: 2px 25px;

            border: none;
            border-bottom: 2px solid #202020;
            
            outline: none;

            font-weight: 800;
            font-size: 26px;
            font-family: 'sans-serif';
            letter-spacing: 1px;
            text-transform: uppercase;
            
        }
        input:focus,
        input:active {
            border: 2px solid orange;
            box-shadow: 0 2px #202020;
            border-radius: 4px;
        }
    }

    .response-names {
        margin: 1.1rem 0 0 0;
        padding: 1rem 2rem;
        position: absolute;
        top: 100%;
        min-width: 250px;
        width: 350px;
        z-index: 9;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    
        height: auto;
        max-height: 200px;
        overflow-y: auto;
        background-color: white;

        list-style: none;

        li {
            line-height: 24px;
            font-size: 1.2rem;
            text-transform: uppercase;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`