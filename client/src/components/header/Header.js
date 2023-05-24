import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Header() {
  return (
   <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'60px',marginBottom:'20px' }}>
      <FloatingLabel controlId="floatingTextarea2" label="Complaints">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '380px', width: '600px' }}
        />
      </FloatingLabel>
    </div>
    <div style={{textAlign:'center',marginBottom:'30px'}}>
    <Button variant='success' type='submit'>Submit</Button>
    </div>
   </>
    
  );
}
