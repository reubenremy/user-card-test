import React from 'react';
import Styled from 'styled-components';

const EachCard = Styled.div`
    border: solid 1px grey;
    border-radius: 8px;
    padding: 8px;
    max-width: 320px;
`;

const Card = ({ user }) => {
    return (
        <EachCard>
            <h2>
                {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
        </EachCard>
    )
};

export default Card;