import Table from 'react-bootstrap/Table';
import Sidebar from './Sidebar';

function Status() {
  return (
    <div>
        <Sidebar />
    <Table striped="columns" style={{ 
        width: '80%',
        borderLeft : '1.2px solid rgb(217, 217, 217)',
        marginLeft: 'auto',
        padding: '20px',
        backgroundColor: 'rgba(240, 248, 255, 0.458)',
    boxShadow: '0px 10px 25px rgba(191, 191, 191, 0.625)',
    padding: '20px',
    marginBottom: '20px',
    
    fontsize: 'larger',
    borderRadius: '10px'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Account</th>
          <th>Updates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Status;