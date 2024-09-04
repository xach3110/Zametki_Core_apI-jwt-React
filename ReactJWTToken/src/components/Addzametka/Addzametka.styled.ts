import styled from 'styled-components';

export const AddzametkaWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  border-radius: 12px;
  background-color: #f9f9f9;
  width: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffd700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.1em;
  color: #333;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;
