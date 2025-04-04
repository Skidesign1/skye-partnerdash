import React, {useEffect, useState} from "react";
import { Children } from "react";
import { useNavigate } from "react-router-dom";
import ClientBlockToggle from "../ClientBlockToggle";

const Layout =({ Children }) => {
    return (
        <div className="flex h-screen bg-gray-200">
             <aside className="w-64 bg-gray-800 text-white p-4">Sidebar Content</aside>
             <main className="flex-grow bg-white p-4">Main Page Content</main>
        </div>
    );
}; 
const Dashboard = () => {
    const navigate = useNavigate();
    const [businessName, setBusinessName] = useState("");
    const [clientName, setClientName] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [businessPhoneNumber, setBusinessPhoneNumber] = useState("");
    const [clientPhoneNumber, setClientPhoneNumber] = useState("");
    const [businessColour, setBusinessColour] = useState([]);
    const [businessCategory, setBusinessCategory] = useState([]);
    const [businessLogo, setBusinessLogo] = useState(null);
    const [businessDescription, setBusinessDescription] = useState("");
    const [password, setPassword] = useState("");
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("partnerToken");
    const partnerId = localStorage.getItem("partnerId");


    const deleteClient = async (clientId, e)=> {
        if (e) e.preventDefault(); // ✅ Only call preventDefault() if e exists

        console.log(clientId);
        

        try {
            const response = await fetch(`http://localhost:5000/api/partner/delete-client/${clientId}`, {
                method: 'DELETE',

            });
            const data = await response.json()

            console.log(data);
            
            setClients((prevClientList) => prevClientList.filter(client => client._id !== clientId));
        } catch (error) {
            console.log('error', error.message);
            
            
        }

    }

    useEffect(() => {
        const fetchClients = async () => {
            try {
              const response = await fetch(`http://localhost:5000/api/partner/${partnerId}/clients`);
          
              // Log the response to see what you're getting
              console.log("Response status:", response.status);
              console.log("Response content type:", response.headers.get("content-type"));
          
              const data = await response.json();
              console.log("Data received:", data);
          
              if (response.ok) {
                setClients(data);
              } else {
                console.error("Error fetching clients:", data.message);
              }
            } catch (error) {
              console.error("Fetch error:", error);
            } finally {
              setLoading(false);
            }
        };
          
    
        fetchClients();
    }, [partnerId]);
    


    //     console.log(localStorage.getItem("partnerToken"));
    //     if (!token) {
    //         console.error("No token found. Redirecting to login...");
    //         navigate("/login"); // ✅ Redirect to login if token is missing
    //     }

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5000/api/${partnerId}/clients`, {
    //                 method: 'GET',
    //                 headers: {
    //                 // 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json',
    //                 },
    //             });
    //             const data = await response.json();
  
    //             setClients(data)
              
   
    //         } catch (error) {
    //           console.error("Error fetching data:", error.message);
    //         } finally {
    //         }
    //       };
        
    //       // Fetch data initially and then at regular intervals
    //       fetchData();
    //       const interval = setInterval(fetchData, 1000); 
        
    //       return () => clearInterval(interval);
    // }, []);

    const createClient = async (e) => {
        e.preventDefault();
        if (!partnerId) {
            console.error("Partner ID is missing!");
            return;
        }

        console.log({
            partnerId,
            businessName,
            clientName,
            businessEmail,
            clientEmail,
            businessAddress,
            businessPhoneNumber,
            clientPhoneNumber,
            businessDescription,
            password,
            businessLogo,
            businessColour,
            businessCategory
        });
        

        const formData = new FormData();
        formData.append("partnerId", partnerId);
        formData.append("businessName", businessName);
        formData.append("clientName", clientName);
        formData.append("businessEmail", businessEmail);
        formData.append("clientEmail", clientEmail);
        formData.append("businessAddress", businessAddress);
        formData.append("businessPhoneNumber", businessPhoneNumber);
        formData.append("clientPhoneNumber", clientPhoneNumber);
        formData.append("businessDescription", businessDescription);
        formData.append("password", password);

        if (businessLogo) {
            formData.append("businessLogo", businessLogo);
        }

        businessColour.forEach((color, index) => {
            formData.append(`businessColour[${index}]`, color);
        });

        businessCategory.forEach((category, index) => {
            formData.append(`businessCategory[${index}]`, category);
        });

        try {
            const response = await fetch(`http://localhost:5000/api/partner/create-client/${partnerId}`, {
                method: "POST",
                headers: {
                    // 'Authorization': `Bearer ${token}`,

                },
                body: formData, 
            });

            const data = await response.json();

            console.log(data);
            

            if (!response.ok) {
                throw new Error(data.error || "Failed to create client");
            }

            console.log("Client created successfully:", data);
            // alert("Client created successfully!");
        } catch (error) {
            console.error("Error creating client:", error);
        }
    };

    
    
    return(
        <div style={{}} className="flex">
            {/* <h1 className="text-3x1">Welcome </h1> */}
            <div className="container flex">

                <div>

                    {clients.map((client) => (
                        <div key={client._id} className="border mb-4 rounded-md">
                            <p>Client name: {client.clientName}</p>
                            <p>Phone: {client.clientPhoneNumber}</p>
                            <p>Business name: {client.businessName}</p>
                            <ClientBlockToggle 
                                clientId={client._id} 
                                isBlockedInitially={client.isBlocked} // ✅ Ensure this is passed correctly
                            />
                        </div>
                    ))}
                </div>


                <form onSubmit={createClient} style={{ }} className="bg-black text-white rounded-md">
                    <h1 className="text-lg mb-4">Create Client</h1>
                    
                    <div className="flex flex-col text-white gap-2">
                        <label>
                            Business Name
                            <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Client Name
                            <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Business Email
                            <input type="email" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Client Email
                            <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Business Address
                            <input type="text" value={businessAddress} onChange={(e) => setBusinessAddress(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Business Phone Number
                            <input type="tel" value={businessPhoneNumber} onChange={(e) => setBusinessPhoneNumber(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Client Phone Number
                            <input type="tel" value={clientPhoneNumber} onChange={(e) => setClientPhoneNumber(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Upload Business Logo
                            <input type="file" accept="image/*" onChange={(e) => setBusinessLogo(e.target.files[0])} className="input text-black" />
                        </label>

                        <label>
                            Choose 3 Business Colors (Comma Separated)
                            <input type="text" placeholder="e.g. #64f72e, #ff5733, #123abc" 
                                onChange={(e) => setBusinessColour(e.target.value.split(",").map(c => c.trim()))}
                                className="input text-black" required 
                            />
                        </label>

                        <label>
                            Choose 3 Business Categories (Comma Separated)
                            <input type="text" placeholder="e.g. Marketing, Finance, Tech" 
                                onChange={(e) => setBusinessCategory(e.target.value.split(",").map(c => c.trim()))}
                                className="input text-black" required 
                            />
                        </label>

                        <label>
                            Tell us about your business
                            <textarea value={businessDescription} onChange={(e) => setBusinessDescription(e.target.value)} className="input text-black" required />
                        </label>

                        <label>
                            Password
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input text-black" required />
                        </label>

                        <button type="submit" className="bg-white text-black p-2 rounded mt-4">Create</button>
                    </div>
                </form>

            </div>
        </div>
    );
};
export default Dashboard;