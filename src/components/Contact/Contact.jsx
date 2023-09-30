import { ContactItem, ContactBox } from './Contact.styled';

export const Contact = ({ id, name, phone, deleteContact }) => {
  return (
    <ContactItem>
      <ContactBox>
        {name}: {phone}
      </ContactBox>
      <button id={id} type="button" onClick={deleteContact}>
        Delete
      </button>
    </ContactItem>
  );
};
