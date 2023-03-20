import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchDiv = styled.div`
margin: 15px auto;
max-width: 1200px
`;

export const Input = styled.input`
padding: 8px 10px;
border-radius: 4px;
min-width: 220px;
`;

export const Button = styled.button`
margin-left: 15px;
padding: 8px 15px;
border: 1px solid grey;
border-radius: 4px;
cursor: pointer;
&:hover,
 :focus {
    background-color: orange;
    border: 1px solid orange;
}
`;

export const Ul = styled.ul`
max-width: 1200px;
padding: 0;
`;

export const LinkLi = styled(Link)`
display: flex;
margin-top: 5px;
gap: 10px;
text-decoration: none;
line-height: 0.7;
color: darkblue;
font-size: 20px;
scale: 1;
&:hover, 
 :focus {
    scale: 1.02;
};
`;

export const PosterImg = styled.div`
width: 40px;
height: 50px;
`;