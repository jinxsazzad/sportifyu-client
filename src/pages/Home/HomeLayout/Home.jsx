import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import PopularClasses from '../PopularCalsses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Features from '../ExtraSection/Features';

const Home = () => {
    return (
        <>
           <HeroSection></HeroSection>
           <Features></Features> 
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </>
    );
};

export default Home;