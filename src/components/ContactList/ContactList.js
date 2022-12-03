import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeSliceContact } from 'redux/items/contactsSlice';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="listContacts">
            <span className="contact">
              {name}: {number}
            </span>
            <button
              className="listButton"
              type="button"
              id={id}
              onClick={() => dispatch(removeSliceContact(id))}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContactItem: PropTypes.func.isRequired,
};
