import styled, { css } from 'styled-components';

export const DefaultButton = styled.button`
    background: #645cff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: 400;
    display: block;
    margin: 1rem auto;
    ${({ large }) =>
        large
            ? css`
                  padding: 1rem;
                  font-size: 1.5rem;
                  font-weight: 700;
              `
            : css`
                  padding: 0.5rem;
                  font-size: 1rem;
                  font-weight: 400;
              `}
`;

export const HippsterButton = styled(DefaultButton)`
    width: 400px;
    background-color: transparent;
    color: #645cff;
    border: 1px solid #645cff;
`;
