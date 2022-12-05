import '../index.scss';

//*      Libraries      //
import { nanoid } from 'nanoid';

//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';

//*         Redux        //
import { useDispatch, useSelector } from 'react-redux';
import { addSliceContact } from 'redux/items/contactsSlice';

//*      Root      //
export default function App() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.filter.filter);
  console.log(contacts);
  console.log(filter);
  const dispatch = useDispatch();

  //*  берем  данные по сабмиту  кнопки  //
  const addContact = ({ name, number }) => {
    const normalizedFilter = name.toLowerCase();

    const checkByName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );
    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
        completed: false,
      };

      dispatch(addSliceContact(contact));
    }
  };

  //*  фильтруем по имени  //
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // *  прописываем  внутри инпута   //
  const handleChange = evt => {
    addContact(evt.currentTarget.value);
    // dispatch(filter(evt.currentTarget.value));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <ContactForm onSubmit={addContact} />
        </Container>
        <Container>
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={handleChange} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContactItem={getVisibleContacts}
          />
        </Container>
      </Section>
    </>
  );
}

// const getVisibleContacts = contacts.filter(contact =>{
//   return contact.name.toLowerCase().includes(filter.toLowerCase())
// }
//   );

//* one more time
// const getVisibleContacts =  contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// * two more time
// const getVisibleContacts = () => {
//   const checkByName = contacts.find(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()))
//   if (checkByName) {
//     alert(`Is already in contacts`);
//   } else {
//     return checkByName;
//   }
// }
