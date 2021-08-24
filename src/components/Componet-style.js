import styled from "styled-components";

 export  const Button = styled.button`
   padding: 6px 20px;
 
   margin: 5px;
   border: none;
   border-radius: 3px;
   color: white;
   border-radius: 12px;
   width:10%;

   ${props => (props.type === 'primary' ? `background: #2196f3; font-weight: bold;  font-size: 20px;` : null)}
   ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
   ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
   ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;











