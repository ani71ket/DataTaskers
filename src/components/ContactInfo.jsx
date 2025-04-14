import { useParams, useNavigate } from 'react-router-dom';
import contactsData from '../data/contacts.json';

export default function ContactInfo() {
  const { id } = useParams();
  const contact = contactsData.find(c => c.id === parseInt(id));
  const navigate = useNavigate();

  if (!contact) return <p>Contact not found</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{contact.firstName} {contact.lastName}</h2>
      <p className="my-2">Phone: {contact.phone}</p>
      <button onClick={() => navigate(`/compose/${contact.id}`)} className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
    </div>
  );
}