const CustomerHome = (props) => {
  return (
    <div className="home-page">
      <h1>List of Customers</h1>
      <div className="customer-grid">
        {props.customers.map((customer) => (
          <div className="customer-card" key={customer.id}>
            <div onClick={() => props.selectCustomer(customer)}>
            <h4>{customer.firstName} {customer.lastName}</h4>
            </div>
            <h4></h4>

           
            
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default CustomerHome
