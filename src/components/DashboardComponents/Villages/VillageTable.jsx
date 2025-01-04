import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const VillageTable = ({ data,setPopUpData }) => {
  return (
    <table className="CRUDVillages_table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((village) => (
          <tr key={village._id}>
            <td>{village._id}</td>
            <td>{village.title}</td>
            <td>
              <FaEdit  onClick={()=> setPopUpData({type:'UPDATE' , id:village._id,title:village.title})}/>
            </td>
            <td>
              <MdDeleteForever />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VillageTable;
