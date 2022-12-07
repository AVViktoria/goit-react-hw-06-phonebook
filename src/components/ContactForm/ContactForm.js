import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addSliceContact } from 'redux/items/contactsSlice';
//*      Libraries      //
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  //*  берем  данные по сабмиту  кнопки  //

  const addContact = evt => {
    evt.preventDefault();
    // const name = evt.currentTarget.name.value;
    // const number = evt.currentTarget.number.value;

    const checkByName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
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
      reset();
    }
  };
  //*  очищаем   сбрасываем   форму  //
  const reset = evt => {
    setName('');
    setNumber('');
    // evt.target.name.value = '';
    // evt.target.number.value = '';
  };
  // *  прописываем  внутри инпута   //
  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={addContact}>
      <div className="inputBox">
        <label className="inputLabel">
          Name
          <input
            className="inputContent"
            type="text"
            value={name}
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
            value={number}
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
