import { useContext } from "react";
import MemberEdit from "./MemberEdit";
import MemberContext from "../context/member";
import { Button } from "react-bootstrap";

function MemberShow({ member, index }) {
  const { deleteMemberById } = useContext(MemberContext);

  const handleDeleteOnclick = () => {
    deleteMemberById(member.id);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td title="name-title">{member.name_title}</td>
        <td>{member.first_name}</td>
        <td>{member.last_name}</td>
        <td>{member.birthday}</td>
        <td title="gender">{member.gender}</td>
        <td>{member.about_yourself}</td>
        <td>
          <MemberEdit member={member} />
          <Button 
            variant="dark" 
            onClick={handleDeleteOnclick}
            className="mx-2"
            >

            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default MemberShow;
