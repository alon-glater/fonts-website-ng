import React, { useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const PLACEHOLDER_TEXT = "אבגדהוזחטיכלמנסעפצקרשת0123456";

interface FontDisplayProps {
  text: string;
  fontName: string;
  displayName: string;
  fileName: string;
  fontUrl: string;
  onDownload: (fontName: string) => void;
  onDeletion: (fontName: string) => void;
}

export const FontDisplay = ({
  text,
  fontName,
  displayName,
  fileName,
  fontUrl,
  onDownload,
  onDeletion,
}: FontDisplayProps) => {
  useEffect(() => {
    new FontFace(fontName, `url(${fontUrl})`).load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    });
  }, [fontName, fontUrl]);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-start">
          <Col xs="auto">
            <h5 style={{ fontFamily: fontName }}>{displayName}</h5>
          </Col>
        </Row>
        <hr style={{ marginTop: 0 }} />
        <Row className="justify-content-between">
          <Col xs="auto">
            <h1 className="display-4" style={{ fontFamily: fontName }}>
              {text || PLACEHOLDER_TEXT}
            </h1>
          </Col>
          <Col xs="auto">
            <ButtonGroup vertical size="lg">
              <Button
                variant="outline-secondary"
                onClick={() => onDownload(fileName)}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => onDeletion(fileName)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
