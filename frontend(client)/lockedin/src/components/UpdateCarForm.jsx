

export default function UpdateCarForm(props) {
  return (
    
      <div className="car-form-container">
        <h1 className='car-form-title'>Edit Car</h1>
        <form className='car-form form' onSubmit={props.Submit}>
          
          <div className="car-form-row">
          <input id= 'year' value ={props.carFromState.year} onChange={props.onChange} name="year" placeholder='Year'/>
           <input id= 'make' value ={props.carFromState.make} onChange={props.onChange} name="make" placeholder='Make'/>
           <input id= 'model' value ={props.carFromState.model} onChange={props.onChange} name="model" placeholder='Model'/>
           <input id= 'color' value ={props.carFromState.color} onChange={props.onChange} name="color" placeholder='Color'/>
            <button className="submit-button button">Submit</button>
          </div>
        </form>
      </div>
  )
}