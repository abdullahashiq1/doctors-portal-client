import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-6">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt fugit quae qui sit dignissimos dolore laudantium praesentium 
                voluptate reprehenderit.</p>
                <div  className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>

                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;