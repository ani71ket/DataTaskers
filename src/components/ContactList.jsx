import { Link } from 'react-router-dom';
import contactsData from '../data/contacts.json';

export default function ContactList() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <ul className="space-y-2">
        {contactsData.map(contact => (
          <li key={contact.id} className="border p-2 rounded">
            <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}