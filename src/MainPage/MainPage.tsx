import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomePage from "../HomePage/HomePage";
import MusicPage from "../MusicPage/MusicPage";
import PhotosPage from "../PhotosPage/PhotosPage";
import s from "./MainPage.styles";
import LinksWidget from "../LinksWidget/LinksWidget";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MainPage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <s.PageContainer theme={theme}>
            <BrowserRouter>
                <s.BannerContainer>
                    <Banner firstName="Anton" lastName="Le"></Banner>
                </s.BannerContainer>
                <s.HomePageContainer>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/photos" element={<PhotosPage />} />
                        <Route path="/music" element={<MusicPage />} />
                    </Routes>
                </s.HomePageContainer>
            </BrowserRouter>
            <LinksWidget />
        </s.PageContainer>
    );
};

export default MainPage;
