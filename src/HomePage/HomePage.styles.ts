import styled from 'styled-components'


const HomePageWrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? 'floralwhite' : '#34495E'};
    border: 3px solid indianred;
    border-radius: 10px;
    position: relative;
    width: 100vw;
    font-size: 2em;
    text-align: left;
    padding: 1.2em;
    display: flex;
    flex-flow: column nowrap;
    gap: 6%;
    align-items: flex-start;
    justify-content: flex-start;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    flex: 1;
    @media all and (max-width: 763px) {
        padding: 0.8em;
    }
`

const IntroDiv = styled.div`
    padding: 0.5em;
    border-radius: 0.25em;
    font-size: 0.8em;
    background-color: ${props => props.theme === 'light' ? 'bisque' : '#34495E'};
    font-family: Rockwell, sans-serif;
    width: 100%;
    display: flex;
    align-items: center;

    @media all and (max-width: 768px) {
        font-size: 0.6em;
        padding: 0.3em;
    }
`

const PhotoWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    width: 100%;
    font-family: Rockwell, sans-serif;
    font-size: 0.9em;

    img {
        width: 20%;
        min-width: 225px;
        box-shadow: grey 0px 13px 27px -5px, grey 0px 8px 16px -8px;
    }
`

const s = {
    HomePageWrapper,
    IntroDiv,
    PhotoWrapper
};


export default s;