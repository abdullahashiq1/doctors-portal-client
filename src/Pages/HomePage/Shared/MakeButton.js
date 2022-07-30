import React from 'react';

const MakeButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-indigo-500">
            {children}</button>
        </div>
    );
};

export default MakeButton;