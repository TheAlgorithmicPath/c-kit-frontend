import "./SessionTable.module.css";
import Star from "../../components/Star/Star";
const SessionTable = () => {
  return (
    <table>
      <tr>
        <th>S.ID</th>
        <th>By</th>
        <th>To</th>
        <th>Topics</th>
        <th>Status</th>
        <th>Rating</th>
      </tr>

      <tr>
        <td>001122</td>
        <td>001122</td>
        <td>001122</td>
        <td>Topics Covered</td>
        <td>Completed</td>
        <td>
          <Star />
        </td>
      </tr>
      <tr>
        <td>001122</td>
        <td>001122</td>
        <td>001122</td>
        <td>Topics Covered</td>
        <td>Completed</td>
        <td>
          <Star />
        </td>
      </tr>
      <tr>
        <td>001122</td>
        <td>001122</td>
        <td>001122</td>
        <td>Topics Covered</td>
        <td>Completed</td>
        <td>
          <Star />
        </td>
      </tr>
    </table>
  );
};

export default SessionTable;
