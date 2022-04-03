import React from 'react';
import styled from 'styled-components';

const image =
    'https://images.ctfassets.net/q5lwz1whkyct/m4r3WRRviGJs5MipQsdSO/dae5f680dc726671ba07a8c468c1ae93/Haven-Heathered-Gray-01_2x.jpeg';

const Card = () => {
    return (
        <StyledCard>
            <img src={image}></img>
            <footer>
                <h4>Product Name</h4>
                <p>$15</p>
            </footer>
        </StyledCard>
    );
};

const StyledCard = styled.article`
    width: 90vw;
    max-width: 300px;
    background-color: var(--white);
    border-radius: 0.25rem;

    img {
        width: 100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        h4 {
            text-transform: capitalize;
            color: red;
        }

        p {
            color: var(--primary);
            font-weight: 700;
        }
    }

    transition: 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 3px 3px #222;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

export default Card;
