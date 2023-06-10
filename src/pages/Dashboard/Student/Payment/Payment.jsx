import axios from 'axios';
import React, { cloneElement } from 'react';
import { useParams } from 'react-router-dom';
import { HomePageTittles } from '../../../../components/Tittles/Tittles';

const Payment = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <HomePageTittles tittle="Payment Page" subTittle="PAY - ENROLL - GET CLASSES" />
            
        </div>
    );
};

export default Payment;