import styled from 'styled-components'


const MusicPageWrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? 'whitesmoke' : '#34495E'};
    border: 3px solid indianred;
    border-radius: 10px;
    position: relative;
    width: 100vw;
    font-size: 2em;
    text-align: left;
    padding: 1.2em;
    display: flex;
    flex-flow: column nowrap;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    flex: 1;
    @media all and (max-width: 768px) {
        padding: 0.8em;
    }
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

    @media all and (max-width: 768px) {
        font-size: 0.7em;
    }
`

const VideoDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 5px;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

    iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

`

const EmbedWrapper = styled.div`
`

const VideosContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 15px;
    .caption {
        display: flex;
        justify-content: center;
        font-family: Rockwell, sans-serif;
        font-size: 0.8em;
        @media all and (max-width: 768px) {
            font-size: 0.5em;
        }
    }
`

const s = {
    MusicPageWrapper,
    IntroDiv,
    VideoDiv,
    EmbedWrapper,
    VideosContainer
};


export default s;