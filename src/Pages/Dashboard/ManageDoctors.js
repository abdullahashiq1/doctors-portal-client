import {useQuery} from 'react-query';
import React from 'react';
import Loading from '../HomePage/Shared/Loading';


const ManageDoctors = () => {
    const {data: doctors, isLoading}= useQuery('doctors', () =>fetch('http://localhost:5000/doctor').then(res=> res.json()));
    
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;