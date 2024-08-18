import styled from 'styled-components'


const PhotosPageWrapper = styled.div`
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
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
`

const PhotoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    width: 80%;
`

const PhotoColumn = styled.div`
    flex: 25%;
    max-width: 33%;
    padding: 12px;
    
    img {
        margin: 12px;
        vertical-align: middle;
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;        
    }

        
    @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;        
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
`

const s = {
    PhotosPageWrapper,
    IntroDiv,
    PhotoColumn,
    PhotoRow
};


export default s;