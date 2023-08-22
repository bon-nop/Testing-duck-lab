import { createContext, useCallback, useState } from "react";
import axios from "axios";

const MembersContext = createContext();

function Provider({ children }) {
  const [members, setMembers] = useState([]);

  const fetchMembers = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/members");

    setMembers(response.data);
  }, []);

  const createMember = async (memberData) => {
    const response = await axios.post(
      "http://localhost:3001/members",
      memberData
    );

    setMembers((prevMembers) => [...prevMembers, response.data]);
  };

  const editMemberById = async (id, memberData) => {
    const response = await axios.put(
      `http://localhost:3001/members/${id}`,
      memberData
    );

    setMembers((prevMembers) => {
      return prevMembers.map((member) => {
        return member.id === id ? { ...member, ...response.data } : member;
      });
    });
  };

  const deleteMemberById = async (id) => {
    await axios.delete(`http://localhost:3001/members/${id}`);

    const updateMembers = members.filter((member) => {
      return member.id !== id;
    });

    setMembers(updateMembers);
  };

  const valueToShare = {
    members,
    fetchMembers,
    createMember,
    editMemberById,
    deleteMemberById,
  };

  return (
    <MembersContext.Provider value={valueToShare}>
      {children}
    </MembersContext.Provider>
  );
}

export { Provider };
export default MembersContext;
