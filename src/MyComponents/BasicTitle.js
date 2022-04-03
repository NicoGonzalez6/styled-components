import styled from 'styled-components';

//special its a pro passed to BasicTitle
const BasicTitle = styled.h1`
    text-align: center;
    text-transform: capitalize;
    color: ${({ special }) => (special ? 'red' : 'blue')};
`;

export default BasicTitle;
