import './contacts-list.css'
import ContactsListItem from '../contacts-list-item/contacts-list-item';
const ContactsList = ({ contact }) => {

    const contacts = contact.map(item => {
        const { ...items } = item;
        return (
            <ContactsListItem
                {...items}
            />
        )
    })
    return (
        <ul className="contacts-list">
            {contacts}
        </ul>
    )

}

export default ContactsList;