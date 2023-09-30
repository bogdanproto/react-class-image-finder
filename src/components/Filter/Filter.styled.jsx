import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;

  margin-bottom: 4px;

  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;

  input {
    display: block;
    width: 100%;
    height: 16px;
    margin-left: 8px;
    border: 1px solid #dedede;
  }
`;
