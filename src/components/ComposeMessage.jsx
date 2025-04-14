import { useParams, useNavigate } from 'react-router-dom';
import contactsData from '../data/contacts.json';

export default function ComposeMessage({ onSend }) {
  const { id } = useParams();
  const contact = contactsData.find(c => c.id === parseInt(id));
  const navigate = useNavigate();
  const otp = Math.floor(100000 + Math.random() * 900000);
  const message = `Hi. Your OTP is ${otp}`;

  const sendMessage = async () => {
    try {
      await onSend({ name: contact.firstName + ' ' + contact.lastName, time: new Date().toISOString(), message });
      alert("Message sent successfully");
      navigate("/sent");
    } catch (e) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Compose Message</h2>
      <textarea readOnly value={message} className="w-full p-2 border rounded mb-4" rows={3} />
      <button onClick={sendMessage} className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
    </div>
  );
}