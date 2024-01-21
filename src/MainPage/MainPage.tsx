import React from "react";
import s from "./MainPage.styles"
import Banner from '../Banner/Banner';
import HomePage from "../HomePage/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MusicPage from "../MusicPage/MusicPage";

// interface MainPageProps {
// }

const MainPage = () => {
    return (
        <s.PageContainer>

            <BrowserRouter>
                <s.BannerContainer>
                    <Banner name="Anton Le" ></Banner>
                </s.BannerContainer>
                <s.HomePageContainer>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/music" element={<MusicPage />} />
                    </Routes>
                </s.HomePageContainer>

            </BrowserRouter>
        </s.PageContainer >
    )
}

export default MainPage;