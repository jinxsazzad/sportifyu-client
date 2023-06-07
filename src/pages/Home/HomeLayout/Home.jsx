import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import PopularClasses from '../PopularCalsses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <>
           <HeroSection></HeroSection> 
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </>
    );
};

export default Home;