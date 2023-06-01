import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Wizard() {
    return (
        <div className="d-flex justify-content-evenly">
            <div className="w-25 bg-success border-end">
                <ListGroup variant="flush">
                    <ListGroupItem className="align-items-start">Summary</ListGroupItem>
                    <ListGroupItem>This is div 1</ListGroupItem>
                </ListGroup>
            </div>
            <div className="w-75 bg-primary">
                This is div 2
            </div>
        </div>
    )
}