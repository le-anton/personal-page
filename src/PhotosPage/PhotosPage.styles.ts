import styled from 'styled-components'


const MusicPageWrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? 'whitesmoke' : '#34495E'};
    border: 4px solid indianred;
    border-radius: 10px;
    position: relative;
    width: auto;
    font-size: 2em;
    text-align: left;
    padding: 1.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    flex: 1;
`

const IntroDiv = styled.div`

`

const s = {
    MusicPageWrapper,
    IntroDiv
};


export default s;