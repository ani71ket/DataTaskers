import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactInfo from './components/ContactInfo';
import ComposeMessage from './components/ComposeMessage';
import SentMessages from './components/SentMessages';

function App() {
  const [sentMessages, setSentMessages] = useState([]);

  const handleSend = (msg) => {
    setSentMessages(prev => [...prev, msg]);
  };

  return (
    <Router>
      <nav className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex justify-center space-x-4 shadow-lg">
        <Link 
          to="/" 
          className="px-4 py-2 bg-blue-500 rounded text-white text-lg hover:bg-blue-600 transition duration-300"
        >
          Contacts 
        </Link>
        <Link 
          to="/sent" 
          className="px-4 py-2 bg-green-500 rounded text-white text-lg hover:bg-green-600 transition duration-300"
        >
          Sent Messages
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactInfo />} />
        <Route path="/compose/:id" element={<ComposeMessage onSend={handleSend} />} />
        <Route path="/sent" element={<SentMessages sent={sentMessages} />} />
      </Routes>
    </Router>
  );
}

export default App;