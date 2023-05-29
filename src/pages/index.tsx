"use client";
import Image from "react-bootstrap/Image";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Sidebar from "@/components/sidebar";
import TopNavBar from "@/components/topnavbar";
import ActivityTimeline from "@/components/activityTimeline";

export default function Home() {
  return (
    <main className="d-flex flex-row bg-secondary">
      <Sidebar />
      <div className="col-sm-8">
        <TopNavBar
          companyName="Ayda (Trading as Parcity Limited)"
          isVerified={true}
          name="Shifra"
        />
        <div className="p-2 ps-3 min-vh-100">
          <Card className="p-2">
            <Card.Header>Ayda Funds</Card.Header>
            <Card.Body className="d-flex justify-content-evenly">
              <ListGroup variant="flush" className="col-md-6">
                <ListGroupItem>Action Required</ListGroupItem>
                <ListGroupItem>Do This Thing</ListGroupItem>
                <ListGroupItem>Then Do this thing</ListGroupItem>
                <ListGroupItem>Then dont forget to do this !!!!</ListGroupItem>
                <ListGroupItem>Did you also forget about this ?</ListGroupItem>
                <ListGroupItem>
                  JK. Everything is already completed
                </ListGroupItem>
              </ListGroup>
              <div className="col-md-6">
                <TabContainer defaultActiveKey="bar-graph-tab">
                  <Nav justify variant="tabs">
                    <Nav.Link eventKey="bar-graph-tab">Annual Revenue</Nav.Link>
                    <Nav.Link eventKey="pie-chart-tab">
                      Currencies Held
                    </Nav.Link>
                  </Nav>
                  <TabContent>
                    <TabPane eventKey="bar-graph-tab">
                      <Image src="bar-graph.svg" width="100%"></Image>
                    </TabPane>
                    <TabPane eventKey="pie-chart-tab">
                      <Image src="dummy.svg" width="100%"></Image>
                    </TabPane>
                  </TabContent>
                </TabContainer>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-evenly py-3">
            <Card className="pe-2 me-2">
              <Card.Header className="d-flex align-items-center fw-bold">
                <i className="text-success bi-database fs-3 px-2"></i>
                Participants
              </Card.Header>
              <Card.Img src="dummy.svg"></Card.Img>
              <Card.Body>
                <ListGroup>
                  <ListGroupItem className="d-flex justify-content-between fw-semibold">
                    <span>Total Participants</span>
                    <span>1,267</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span>Total Pending</span>
                    <span>822</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span>Total Qualified</span>
                    <span>467</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span>Total Disengaged</span>
                    <span>27</span>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card className="ps-2 ms-2">
              <Card.Header className="d-flex align-items-center fw-bold">
                <i className="text-success bi-card-list fs-3 px-2"></i>
                Projects
              </Card.Header>
              <Card.Img src="dummy.svg"></Card.Img>
              <Card.Body>
                <ListGroup>
                  <ListGroupItem className="d-flex justify-content-between fw-semibold">
                    <span>Total Participants</span>
                    <span>1,267</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span>Total Pending</span>
                    <span>822</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span>Total Qualified</span>
                    <span>467</span>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between">
                    <span>Total Disengaged</span>
                    <span>27</span>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <ActivityTimeline key="activity_timeline" />
    </main>
  );
}
