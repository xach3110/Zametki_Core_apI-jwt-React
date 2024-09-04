import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  border-radius: 12px;
  background-color: #f9f9f9;
  width: 450px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffd700; /* Немного более приятный желтый цвет */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 1.8em;
  color: #333;
  margin: 0;
  flex-grow: 1;
`;

export const DateTime = styled.p`
  font-size: 0.9em;
  color: #555;
  margin: 0 0 16px 0;
`;

export const Content = styled.p`
  font-size: 1.1em;
  color: #333;
  line-height: 1.6;
`;

export const DeleteB = styled.button`
  width: 30px;
  height: 30px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;
