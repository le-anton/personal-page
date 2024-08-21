import styled from 'styled-components'

const PageContainer = styled.div`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;    
    background-image: ${props => props.theme === 'light' ? "url('light-flowers-bg.jpg')" : "url('/dark-flowers-bg.jpg')"};
`

const BannerContainer = styled.div`
    padding: 10px;
`

const HomePageContainer = styled.div`
    padding: 10px;
    flex-grow: 1;
    display: flex;    
`

const s = {
    PageContainer,
    BannerContainer,
    HomePageContainer
};


export default s;