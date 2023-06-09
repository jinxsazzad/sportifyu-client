import React from 'react';
import { FaBook } from 'react-icons/fa';

const Features = () => {
    return (
        <div className='flex justify-between items-center gap-1 -mt-10 z-50'>
            <div className='bg-[#60CD96] p-6'>
                <FaBook className='text-5xl'></FaBook>
                <h4 className='text-2xl mt-2 mb-4' >Unique Classes</h4>
                <p>Our Special Education Program offers quality education to children with disabilities and developmental delays.</p>
            </div>
            <div className='bg-[#69D2E7] p-6'>
                <FaBook className='text-5xl'></FaBook>
                <h4 className='text-2xl mt-2 mb-4' >Unique Classes</h4>
                <p>Our Special Education Program offers quality education to children with disabilities and developmental delays.</p>
            </div>
            <div className='bg-[#F98F6F] p-6'>
                <FaBook className='text-5xl'></FaBook>
                <h4 className='text-2xl mt-2 mb-4' >Unique Classes</h4>
                <p>Our Special Education Program offers quality education to children with disabilities and developmental delays.</p>
            </div>
            <div className='bg-[#9D87C3] p-6'>
                <FaBook className='text-5xl'></FaBook>
                <h4 className=' text-2xl mt-2 mb-4' >Unique Classes</h4>
                <p>Our Special Education Program offers quality education to children with disabilities and developmental delays.</p>
            </div>
        </div>
    );
};

export default Features;