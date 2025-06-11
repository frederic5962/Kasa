import { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';

export default function Accordion({ title, content }) {
  console.log('Props reçues :', title, content);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-3 border-0">
      {/* En-tête de l'accordéon */}
      <Card.Header
        className="rounded-3 bg-danger text-white p-3 d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }} // Rendre cliquable
      >
        <h2 className="m-0">{title}</h2>
        <span className={`icon-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </Card.Header>

      {/* Conteneur englobant nécessaire pour `Collapse` */}
      <div>
        <Collapse in={isOpen}>
          <div className="accordion-content">
            <Card.Body className="text-black p-3">{content}</Card.Body>
          </div>
        </Collapse>
      </div>
    </Card>
  );
}
