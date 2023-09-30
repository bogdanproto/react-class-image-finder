import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ contactsBook, deleteContact }) => {
  return (
    <ContactListStyled>
      {contactsBook.map(({ id, name, phone }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListStyled>
  );
};
