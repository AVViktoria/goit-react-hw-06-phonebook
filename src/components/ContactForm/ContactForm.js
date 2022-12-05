// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addSliceContact } from 'redux/items/contactsSlice';
//*      Libraries      //
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const contacts = useSelector(state => state.phonebook.contacts);
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
  // *  прописываем  внутри инпута   //
  const handleChange = evt => {
    addContact(evt.currentTarget.value);
  };
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // //   //*  прописываем  внутри инпута   //
  // const handleChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // //   //*  слушатель событий по кнопке  //
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   onSubmit({ name, number });
  //   reset();
  // };
  // //   //*  очищаем   сбрасываем   форму  //
  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form onSubmit={addContact}>
      <div className="inputBox">
        <label className="inputLabel">
          Name
          <input
            className="inputContent"
            type="text"
            // value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name"
            required
          />
        </label>
      </div>
      <div className="inputBox">
        <label className="inputLabel">
          Number
          <input
            className="inputContent"
            type="tel"
            // value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number"
            required
          />
        </label>
      </div>
      <button className="inputButton" type="submit">
        Add contact
      </button>
    </form>
  );
}
ContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
