import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-6">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-primary">{name}</h2>
                <p>{
                    slots.length > 0 
                    ? <span>{slots[0]}</span>
                    : <span className="text-red-500">No Slot Available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces': 'Space'} available</p>
                <div class="card-actions justify-center">
                        <label for="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length===0}  
                            class="btn btn-sm btn-secondary text-white uppercase">
                            Book Appointment
                        </label>
                </div>
            </div>
        </div>
    );
};

export default Service;