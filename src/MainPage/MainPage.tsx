import React from "react";
import s from "./MainPage.styles"
import Banner from '../Banner/Banner';
import HomePage from "../HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPage from "../MusicPage/MusicPage";
import PhotosPage from "../PhotosPage/PhotosPage";


const MainPage = () => {
    return (
        <s.PageContainer>

            <BrowserRouter>
                <s.BannerContainer>
                    <Banner firstName="Anton" lastName="Le" ></Banner>
                </s.BannerContainer>
                <s.HomePageContainer>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/photo" element={<PhotosPage />} />
                        <Route path="/music" element={<MusicPage />} />
                    </Routes>
                </s.HomePageContainer>

            </BrowserRouter>
        </s.PageContainer >
    )
}

export default MainPage;