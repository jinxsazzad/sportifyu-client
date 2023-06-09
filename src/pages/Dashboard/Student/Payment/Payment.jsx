import axios from 'axios';
import React, { cloneElement } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            
        </div>
    );
};

export default Payment;