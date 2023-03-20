import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DivContainer = styled.div`
padding: 0 10px;
border-radius: 5px;
border: 2px solid orange;
`;

export const H1 = styled.h1`
margin-left: 40px;
`;

export const Div = styled.div`
width: 50px;
height: 50px;
`;

export const Li = styled.li`
display: block;
margin-top: 5px;
`;

export const LinkLi = styled(Link)`
display: flex;
align-items: center;
gap: 15px;
text-decoration: none;
color: darkblue;
border: 1px solid orange;
border-radius: 4px;
scale: 1;
&:hover, 
:focus {
    color: blue;
    scale: 1.02;
}
line-height: 1.1;
font-size: 18px;
`;