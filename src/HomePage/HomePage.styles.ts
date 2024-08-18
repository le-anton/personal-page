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
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    flex: 1;
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
    height: 3em;
`

const s = {
    HomePageWrapper,
    IntroDiv
};


export default s;