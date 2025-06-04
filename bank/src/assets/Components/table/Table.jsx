import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
  
    <div className='container my-4'>
        <div className='text-center'>
        <h1>Compare plans</h1>
        <br></br>
      </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Free</th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Public</b></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
        </tr>
        <tr>
          <td><b>Private</b></td>
          <td></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
        </tr>
        <tr>
          <td><b>Permisssins</b></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
        </tr>
        <tr>
          <td><b>Sharing</b></td>
          <td></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
        </tr>
        <tr>
          <td><b>Unlimited members</b></td>
          <td></td>
          <td><input type='checkbox' checked/></td>
          <td><input type='checkbox' checked/></td>
        </tr>
        <tr>
          <td><b>Extra security</b></td>
          <td></td>
          <td></td>
          <td><input type='checkbox' checked/></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default BasicExample;