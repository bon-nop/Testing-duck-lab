import { Container, Table } from "react-bootstrap"
import MemberShow from "./MemberShow";
import useMembersContext from "../hooks/use-members-context";
import MemberCreate from "./MemberCreate";

function MemberList() {
  const { members } = useMembersContext();

  const renderedMembers = members.map((member, index) => {
    return <MemberShow key={member.id} member={member} index={index} />;
  });
  
  return (
    <Container className="question-1 mt-3 bg-white p-3 rounded-1">
        <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th title="name-title">Name Title</th>
            <th title="first-name">First Name</th>
            <th title="last-name">Last Name</th>
            <th title="birthday">Birthday</th>
            <th title="gender">Gender</th>
            <th title="about-yourself">About Yourself</th>
            <th title="action">
              <MemberCreate />
            </th>
          </tr>
        </thead>
        <tbody>
          {renderedMembers}
        </tbody>
      </Table>
    </Container>
  )
}

export default MemberList