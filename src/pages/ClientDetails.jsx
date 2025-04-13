import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ClientBlockToggle from '../components/ClientBlockToggle';

const ClientDetails = () => {
  const { clientId } = useParams();
  const [client, setClient] = useState(null);
  // const partnerId = localStorage.getItem("partnerId");


  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/partner/clients/${clientId}`);
        const data = await response.json();
        setClient(data);
        
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchDetails();
  }, [clientId]);
  

  if (!client) return <div>Loading...</div>;

  return (
    <div className="p-6 w-[50%] mx-auto space-y-4 rounded-lg bg-[#56778] border text-black">
      {/* <h2 className="text-xl font-bold mb-2">{partner.name.toUpperCase()}'s Profile</h2>
      <p>Email: {partner.email}</p>
      <p>Created: {new Date(partner.createdAt).toLocaleDateString()}</p> */}

      <h3 className="text-lg font-semibold mt-6">Clients Details</h3>
      {client ? (
        <ul className="list-disc ml-6">
          <li key={client._id} className="mb-2">
            <p>Name: {client.clientName}</p>
            <p>Business: {client.businessName}</p>
            <p>Business PhoneNumber: {client.businessPhoneNumber}</p>
            <p>Description: {client.businessDescription}</p>
            <p>Business Address: {client.businessAddress}</p>
            <p>Business Email: {client.businessEmail}</p>
            <p>Client Email: {client.clientEmail}</p>

            <ClientBlockToggle 
                  clientId={client._id} 
                  isBlockedInitially={client.isBlocked}
              />
          </li>
        </ul>
      ) : (
        <p className="text-gray-400">Client details not available.</p>
      )}
    </div>
  );
};

export default ClientDetails;
