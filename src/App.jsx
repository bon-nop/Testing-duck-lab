import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Routes, Route } from "react-router-dom";
import Question1 from "./Question1.jsx";
import Question2 from "./Question2.jsx";
import MemberList from "./pages/MemberList.jsx";
import { useContext, useEffect } from "react";
import MembersContext from "./context/member";

function AppHeader() {
  return (
    <>
      <Navbar expand="lg"  bg="white" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/src/assets/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="px-3" href="/">
                Question 1
              </Nav.Link>
              <Nav.Link className="px-3" href="/question-2">
                Question 2
              </Nav.Link>
              <Nav.Link className="px-3" href="/member">
                Member List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

function App() {
  const { fetchMembers } = useContext(MembersContext);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers])

  return (
    <>
      <Routes>
        <Route element={<AppHeader />}>
          <Route path="/" element={<Question1 />} />
          <Route path="/question-2" element={<Question2 />} />
          <Route path="/member" element={<MemberList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
