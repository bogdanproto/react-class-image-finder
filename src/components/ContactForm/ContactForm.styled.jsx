import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;

  padding: 16px;
  margin-top: 12px;
  margin-bottom: 12px;

  border: 1px solid #dedede;

  button {
    width: 128px;
    padding: 4px 8px;

    text-transform: capitalize;

    background-color: #e4dbdb;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.label`
  display: block;

  margin-bottom: 8px;

  font-size: 12px;
  font-weight: bold;

  input {
    display: block;
    width: 100%;
    border: 1px solid #dedede;
  }
`;
