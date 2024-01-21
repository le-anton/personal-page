import React from "react";
import s from "./MainPage.styles"
import Banner from '../Banner/Banner';
import HomePage from "../HomePage/HomePage";

interface MainPageProps {
}

const MainPage = () => {
    return (
        <s.PageContainer>
            <s.BannerContainer>
                <Banner name = "Anton Le" ></Banner>
            </s.BannerContainer>
            <s.HomePageContainer>
                <HomePage></HomePage>
            </s.HomePageContainer>
        </s.PageContainer>
    )
}

export default MainPage;