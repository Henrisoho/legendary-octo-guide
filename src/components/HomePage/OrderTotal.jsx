import React from "react";

function OrderTotal() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

return (
    <>
     <section>
      <h2>Step 2: Customer Information</h2>
      <form onSubmit={handleSubmit} className="add-Order-form">
        <input 
          required 
          placeholder="Name"                
          value={name}
          onChange={(event) => setName(event.target.value)}
          <button type="Pickup"> Pickup </button>
        />

        <input 
          required 
          placeholder="Street Address" 
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          <button type="Delivery"> Delivery </button>
        />

        <input 
          required 
          placeholder="City" 
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

          <input 
          required 
          placeholder="Zip" 
          value={city}
          onChange={(event) => setZip(event.target.value)}
        />

        <button type="submit">
          Next
        </button>
      </form>
    </section>
  )
}


export default OrderTotal;