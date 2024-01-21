import styled from 'styled-components'


const HomePageWrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? 'powderblue' : '#34495E'};
    border: 4px solid indianred;
    border-radius: 10px;
    position: relative;
    width: auto;
    font-size: 2em;
    text-align: left;
    padding-left: 1.8em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
    flex: 1;
`

const s = {
    HomePageWrapper
};


export default s;