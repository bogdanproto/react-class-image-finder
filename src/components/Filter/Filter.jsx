import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts:
      <input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};
