import React from 'react';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div``;

const Product = () => {
    return (
     <Container>
      <Navbar />
      <Announcement />
     
      <Newsletter />
      <Footer />
    </Container>
    );
};

export default Product;
