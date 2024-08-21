import styled from 'styled-components'


const BannerDiv = styled.div`
    background-color: ${props => props.theme === 'light' ? '#c7d8c6' : '#34495E'};
    border: 3px solid indianred;
    border-radius: 10px;
    position: relative;
    width: auto;
    font-size: 2em;    
    text-align: left;
    padding: 0 1.8em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};

    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        padding: 0 1em;

        .middle {
            width: 100%;
            order: 3;
            margin: -2px 0 15px;
            justify-content: space-evenly;

            @media all and (max-width: 568px) {
                justify-content: space-between;
            }
        }

        .left {
            width: 50%;
            line-height: 0.3;
        }

        .right {
            line-height: 0.3;
            order: 2;
        }
    }
`

const ThemeButton = styled.button`
    background-color: ${props => props.theme === 'dark' ? 'white' : '#CC4629'};     
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: ${props => props.theme === 'dark' ? '#0d172a' : 'white'};
    cursor: pointer;
    display: inline-block;
    font-family: "Basier circle",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";    
    font-weight: 600;
    line-height: 1;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .4s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-size: 1.125rem;
    padding: 1rem 1.1rem;

    &:hover {
        background-color: ${props => props.theme === 'light' ? '#F6DDCC' : '#1e293b'};
        color: ${props => props.theme === 'light' ? '#0d172a' : 'white'};
    }

`

const TitleDiv = styled.div`
    line-height: 0.8;

    a {
        text-decoration: none;
    }

    h1 {
        align-content: center;
        font-size: 160%;
        font-weight: 700;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        
        background-clip: text;
        -webkit-background-clip: text;
        z-index: 1;
    }

    .first {
        color: #FF5733;
    }

    .last {
        color: #C09576;
    }
`


const ButtonDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 60vw;
`

const ToggleDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    width: 10vw;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`

const s = {
    BannerDiv,
    ButtonDiv,
    ToggleDiv,
    TitleDiv,
    ThemeButton,
    ButtonsWrapper
};


export default s;