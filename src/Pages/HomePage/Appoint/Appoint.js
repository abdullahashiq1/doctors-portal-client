import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppoint from './AvailableAppoint';

const Appoint = () => {
    const [date, setDate] = useState(new Date());

    return (
             <div>
                <AppointBanner date={date} setDate={setDate}></AppointBanner>
                <AvailableAppoint date={date}></AvailableAppoint>
                <Footer />
            </div>        
    );
};

export default Appoint;