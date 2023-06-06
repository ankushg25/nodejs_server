import { Form } from "react-bootstrap";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";

interface ChcekAndRadioProps {
  type: FormCheckType;
  id: string;
  values: string[];
  checked: Function;
}
export default function RadioAndCheckbox(
  props: ChcekAndRadioProps
): JSX.Element {
  return (
    <Form>
      {props.values.map((item, idx) => (
        <Form.Check
          key={`${props.id}-${idx}`}
          className="py-2"
          type={props.type}
          id={`${props.id}-${idx}`}
          label={item}
        />
      ))}
    </Form>
  );
}
