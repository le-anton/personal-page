import styled from 'styled-components'

const PageContainer = styled.div`
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
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