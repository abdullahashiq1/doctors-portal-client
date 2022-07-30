import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import MakeButton from '../Shared/MakeButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`

        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nostrum distinctio praesentium minus
                hic dolorum tempore cum libero doloremque suscipit consectetur est id at vero numquam, officia voluptatibus quasi alias ea nisi, iste architecto iusto sint. 
                Deleniti assumenda delectus voluptate.</p>
                <MakeButton>Get Started</MakeButton>
            </div>
        </section>
    );
};

export default MakeAppointment;