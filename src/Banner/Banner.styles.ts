import styled from 'styled-components'


const BannerDiv = styled.div`
    background-color: ${props => props.theme === 'light' ? '#c7d8c6' : '#34495E'};
    border: 4px solid indianred;
    border-radius: 10px;
    position: relative;
    width: auto;
    font-size: 2em;
    height: 100px;
    text-align: left;
    padding-left: 1.8em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
`

const ThemeButton = styled.button`
background-color: ${props => props.theme === 'dark' ? 'white' : '#911616'};     
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: ${props => props.theme === 'dark' ? '#0d172a' : 'white'};
    cursor: pointer;
    display: inline-block;
    font-family: "Basier circle",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
    padding: 1rem 1.4rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .1s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-right: 2%;

    &:hover {
        background-color: ${props => props.theme === 'light' ? '#F6DDCC' : '#1e293b'};   
        color: ${props => props.theme === 'light' ? '#0d172a' : 'white'};
    }

    @media (min-width: 768px) {
        font-size: 1.125rem;
        padding: 1rem 1.6rem;
    }
`

const TitleDiv = styled.div`

    h1 {
        align-content: center;
        font-size: 160%;
        font-weight: 700;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: linear-gradient(180deg, indianred, salmon, #FF5733);
        background-clip: text;
        -webkit-background-clip: text;
        z-index: 1;
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

const s = {
    BannerDiv,
    ButtonDiv,
    ToggleDiv,
    TitleDiv,
    ThemeButton
};


export default s;