import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 12px;

  font-size: 12px;
  font-weight: bold;

  button {
    min-width: 64px;
    height: 18px;
    padding: 2px 2px;

    text-transform: capitalize;

    background-color: #e4dbdb;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ContactBox = styled.div`
  min-width: 260px;
  height: 18px;
`;
