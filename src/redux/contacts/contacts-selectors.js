// export const getContactsItems = store => store.contacts.items;
export const getContactsItems = ({ contacts }) => contacts.items;

export const getFilteredContactsItems = ({ contacts }) => {
    const { items, filter } = contacts;
    if(!filter){
        return items
    }
    return items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
}

export const getFilter = ({ contacts }) => contacts.filter;