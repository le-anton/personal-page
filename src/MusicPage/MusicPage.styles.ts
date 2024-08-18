import styled from 'styled-components'


const MusicPageWrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? 'whitesmoke' : '#34495E'};
    border: 4px solid indianred;
    border-radius: 10px;
    position: relative;
    width: 100vw;
    font-size: 2em;
    text-align: left;
    padding: 1.2em;
    display: flex;
    flex-flow: column nowrap;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    flex: 1;
`

const IntroDiv = styled.div`
    padding: 0.5em;
    border: 3px whitesmoke solid;
    border-radius: 0.25em;
    font-size: 0.8em;
    background-color: ${props => props.theme === 'light' ? 'bisque' : '#34495E'};
    font-family: Rockwell, sans-serif;
    display: flex;
    flex-flow: column nowrap;    
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    
    h3 {
        margin: 15px 0 0;
    }

    p {
        margin: 8px;
    }
`

const VideoDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 5px;

    .caption {
        font-family: Rockwell, sans-serif;
        font-size: 0.8em;        
    }
`

const EmbedWrapper = styled.div`
`

const s = {
    MusicPageWrapper,
    IntroDiv,
    VideoDiv,
    EmbedWrapper
};


export default s;