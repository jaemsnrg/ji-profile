import React from 'react';
import { Header, Footer } from '@molecules';
import { Splash, About, Clients } from '@sections';
import { Wrapper } from './home.style';



const Home = () => {
    return ( 
        <>
        <Wrapper>
            <Header />
            <Splash />
            <About />
            <Clients />
        </Wrapper>
        <Footer />
        </>
        );
}

export default Home;