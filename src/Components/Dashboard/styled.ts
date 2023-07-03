import styled from 'styled-components'


export const DashboardContainer = styled.div`
    background: #fff;
    padding: 20px;
    flex: 1;
    width: 100%;
    .heros-container {

        background-color: #fff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        flex: 1;
        
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
        
        .heros-list {
            /* width: 60%;  */
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-self: center;
            flex: 1;
            .hero-box {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 5px;
            }
            .hero-box::after {
                content: '';
                display: block;
                position: absolute;
                width: 15px;
                height: 30px;
                background: #fff;
                z-index: 5;
                bottom: -5px;
                right: 3px;
                transform: rotate(45deg);
            }
        }

        .pagination-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(0, 0, 0, 0.15);

            .pagination-button {
                cursor: pointer;
            }

            .page-counter {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                margin: 0 20px;
                font-family: "Dejavu Sans Condensed";
            }
        }

        @media (max-width: 600px) {
            .heros-container {
                padding: 10px;
            }
        }

        @media (min-width: 769px) {
            .heros-list {
                width: 80%;
            }
        }

        @media (min-width: 1080px) {
            .heros-list {
                width: 70%;
            }
        }
        
        @media (min-width: 1280px) {
            .heros-list {
                width: 90%;
            }
        }
    }
`
