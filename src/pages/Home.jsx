import React from 'react';
import Annoucement from '../components/Annoucement/Annoucement';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';
import Divider from '../components/Divider/Divider';
import { heroOne, heroTwo, heroThree } from '../data/ContentData';

const Home = () => {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Content {...heroOne} />
            <Categories />
            <Content {...heroTwo} />
            <Products />
            <Content {...heroThree} />
            <Newsletter />
            <Divider />
            <Footer />
        </div>
    )
}

export default Home;
