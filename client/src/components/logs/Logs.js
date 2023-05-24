import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import { FormControl, InputGroup} from 'react-bootstrap';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';

export default function Logs() {
  const [key, setKey] = useState('home');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px'  }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="User">
          <div style={{ marginTop: '30px',marginRight:'0px'}}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <FormControl type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <FormControl type="password" placeholder="Password" />
            </InputGroup>
            <Button className="btn btn-primary" href='/Home'>Login</Button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button className="btn btn-light">
                <FaGoogle /> Login with Gmail
              </button>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Admin">
          <div style={{ marginTop: '30px' }}>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <FormControl type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaLock />
              </InputGroup.Text>
              <FormControl type="password" placeholder="Password" />
            </InputGroup>
            <button className="btn btn-primary">Login</button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button className="btn btn-light">
                <FaGoogle /> Login with Gmail
              </button>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
