import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsItems, getFilteredContactsItems } from 'redux/contacts/contacts-selectors';
import { add, remove, setFilter } from 'redux/contacts/contacts-slice';

import ContactForm from 'shared/components/ContactForm';
import Filter from 'module/Filter';
import ContactList from 'module/ContactList';

function Contacts() {
  const contactsItems = useSelector(getContactsItems);
  const filteredContactsItems = useSelector(getFilteredContactsItems);
 
       
    const dispatch = useDispatch();

    const onAddContact = useCallback((data)=> {
        const sameName = contactsItems.some(el => el.name === data.name);
        sameName
        ? alert(`${data.name} you already have in the contacts`)
        : dispatch(add(data));
    })
    const onRemoveContact = useCallback((id) => {
        dispatch(remove(id));
    })
    const onFilter = useCallback((e)=>{
        const { value } = e.target;
        dispatch(setFilter(value));
    })

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter filter={onFilter} />
      <ContactList items={filteredContactsItems} onClick={onRemoveContact} />
    </>
  );
}
export default Contacts;
