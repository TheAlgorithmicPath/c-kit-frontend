import "./SessionTableV2.module.css";
import Star from "../../components/Star/Star";
const SessionTable = () => {


  const data = [

    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    { id: '001122', by: '001122', to: '001122', topics: 'Topics Covered', status: 'Completed' },
    // Add more entries here as needed
  ];


  return (
    <table>
      <thead>
        <tr>
          <th>S.ID</th>
          <th>By</th>
          <th>To</th>
          <th>Topics</th>
          <th>Status</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.id}</td>
            <td>{entry.by}</td>
            <td>{entry.to}</td>
            <td>{entry.topics}</td>
            <td>{entry.status}</td>
            <td>
              <Star />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );


};

export default SessionTable;







