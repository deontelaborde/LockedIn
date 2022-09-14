const CustomerHome = (props) => {
  return (
    <div className="home-page">
      <h1>List of Customers</h1>
      <div className="customer-grid">
        {props.customers.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <h4>First Name: {customer.firstName}</h4>
            <h4>Last Name: {customer.lastName}</h4>
            <h4>email: {customer.email}</h4>
            <h4>phoneNumber: {customer.phoneNumber}</h4>
            <h4>
              Address: {customer.address} {customer.city},
              {customer.stateProvince} {customer.postalCode}
            </h4>
            <h4>{customer.country}</h4>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerHome
