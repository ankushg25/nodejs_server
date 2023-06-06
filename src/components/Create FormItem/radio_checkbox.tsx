import { MouseEventHandler } from "react"
import { Form } from "react-bootstrap"
import { FormCheckType } from "react-bootstrap/esm/FormCheck"

type ChcekAndRadioProps = {
    type: FormCheckType,
    key: string,
    values: string[],
    checked: Function
}
export default function RadioAndCheckbox(props: ChcekAndRadioProps): JSX.Element {
    return (
        <Form>
            {
                props.values.map(item => (<Form.Check className="py-2" type={props.type} id={props.key} label={item} />))
            }
        </Form>
    )
}