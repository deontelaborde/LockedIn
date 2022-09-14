const CustomerDetails = (props) => {
  return (
    <section className="customer-page">
      <div className="customer-details">
        <h1 className="customer-title">Customer</h1>
        <div className="customer-details-description-container">
          <h4>First Name: {props.selectedCustomer.firstName}</h4>
        </div>
        <h4>Last Name: {props.selectedCustomer.lastName}</h4>

        <h4>Email: {props.selectedCustomer.email}</h4>
        <h4>Phone Number: {props.selectedCustomer.phoneNumber}</h4>
        <h4>
          Address: {props.selectedCustomer.address}{' '}
          {props.selectedCustomer.city},{props.selectedCustomer.stateProvince}{' '}
          {props.selectedCustomer.postalCode}
        </h4>
        <h4>{props.selectedCustomer.country}</h4>
      </div>

      <h1 className="customer-title">Cars</h1>
      {props.selectedCustomer.Cars.map((car, index) => (
        <div className="car" key={car.id}>
          <h3>
            {car.year} {car.make} {car.model}
          </h3>
          <button
            className="edit-button button"
            onClick={() => {
              props.editCar(
                {
                  id: car.id,
                  rating: car.rating,
                  body: car.body
                },
                index
              )
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </section>
  )
}

export default CustomerDetails
