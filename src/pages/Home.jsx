import React from 'react';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Content from '../components/Content/Content';
import { heroOne, heroTwo, heroThree } from '../data/ContentData';

const Home = () => {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Content {...heroOne} />
            <Categories />
            <Content {...heroThree} />
            <Products />
            <Content {...heroTwo} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;
