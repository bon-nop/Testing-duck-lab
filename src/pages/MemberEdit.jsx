import { useState, useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import MembersContext from "../context/member";

function MemberEdit({ member }) {
  const { editMemberById } = useContext(MembersContext);
  const [show, setShow] = useState(false);
  const listNameTitle = ["miss", "mrs.", "mr."];
  const listGender = ["male", "female", "other"];

  const [inputMembers, setInputMembers] = useState({
    name_title: member.name_title,
    first_name: member.first_name,
    last_name: member.last_name,
    birthday: member.birthday,
    gender: member.gender,
    about_yourself: member.about_yourself,
  });

  const handleClose = () => {
    setShow(false);

    setInputMembers({
      name_title: member.name_title,
      first_name: member.first_name,
      last_name: member.last_name,
      birthday: member.birthday,
      gender: member.gender,
      about_yourself: member.about_yourself,
    });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputMembers((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editMemberById(member.id, inputMembers);

    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} className="mx-2">
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Member</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group className="col-12 col-md-4 col-lg-2 mb-3">
                <Form.Label>Name Title</Form.Label>
                <Form.Select
                  value={inputMembers.name_title}
                  name="name_title"
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  {listNameTitle.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-6 col-md-4 col-lg-5">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="first_name"
                  onChange={handleChange}
                  value={inputMembers.first_name}
                  required
                />
              </Form.Group>

              <Form.Group className="col-6 col-md-4 col-lg-5">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="last_name"
                  onChange={handleChange}
                  value={inputMembers.last_name}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="col-5 col-md-4 col-lg-3">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="birthday"
                  onChange={handleChange}
                  value={inputMembers.birthday}
                />
              </Form.Group>

              <Form.Group className="col-7 col-md">
                <Form.Label>Gender</Form.Label>
                <br />
                {listGender.map((item, index) => (
                  <Form.Check
                    inline
                    type="radio"
                    label={item}
                    name="gender"
                    id={`form-${item}-Radios1`}
                    value={item}
                    onChange={handleChange}
                    checked={inputMembers.gender === item}
                    key={index}
                  />
                ))}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>About Yourself</Form.Label>
                <Form.Control
                  as="textarea"
                  name="about_yourself"
                  onChange={handleChange}
                  value={inputMembers.about_yourself}
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-dark"
              onClick={handleClose}
              className="col-12 col-lg-3"
            >
              Close
            </Button>
            <Button 
              variant="dark" 
              type="submit" 
              className="col-12 col-lg-3"
            >
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default MemberEdit;
