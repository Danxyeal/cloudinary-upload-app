import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import UploadForm from './UploadForm.js';

export default function App() {
  return (
    <>
      <Container fluid>
        <Row>
	  <Col>
	    <UploadForm />
	  </Col>
	</Row>
      </Container>
    </>
  );
}

