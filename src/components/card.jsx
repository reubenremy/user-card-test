import React from 'react';

const Card = ({ user }) => {
    return (
        <div>
            <h2>
                {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
        </div>
    )
};

export default Card;