import UpdateCarForm from "../components/UpdateCarForm";

export default function EditCar(props) {
  return (
    <UpdateCarForm
      car={props.car}
      carFromState={props.carFromState}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
    />
  );
}
