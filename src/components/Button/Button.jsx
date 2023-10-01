import { ButtonStyled } from './Button.styled';

export const Button = ({ click }) => {
  return (
    <ButtonStyled onClick={click} type="button">
      Load more
    </ButtonStyled>
  );
};
