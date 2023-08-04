import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import PopularClasses from '../PopularCalsses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Features from '../ExtraSection/Features';
import Testimonials from '../Testimonials/Testimonials';
import Promotion from '../Promotion/Promotion';
import CallforAction from '../CallforAction/CallforAction';
import Promotion2 from '../Promotion2/Promotion2';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
           <HeroSection></HeroSection>
           <Features></Features> 
           <Promotion2></Promotion2>
           <PopularClasses></PopularClasses>
           <Promotion></Promotion>
           <PopularInstructors></PopularInstructors>
           <Testimonials></Testimonials>
           <CallforAction></CallforAction>
           <Contact></Contact>
        </>
    );
};

export default Home;