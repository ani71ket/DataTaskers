export default function SentMessages({ sent }) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Sent Messages</h2>
        <ul className="space-y-2">
          {[...sent].reverse().map((msg, i) => (
            <li key={i} className="border p-2 rounded">
              <p><strong>{msg.name}</strong></p>
              <p>{msg.message}</p>
              <p className="text-sm text-gray-500">{new Date(msg.time).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }