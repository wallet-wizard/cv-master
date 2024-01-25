import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useGlobalContext } from '../../../utils/GlobalContext';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';
import './PreviewModal.css'

const PreviewModal = ({ showModal, handleClose }) => {

  const { userData } = useGlobalContext()
  const data = userData.stagingCV;

  let CVTitle = userData.stagingCVTitle;
  if (!CVTitle) {
    CVTitle = " _New CV_ "
  }

  const title = data.title;
  const summary = data.summary;
  const skillsHeader = data.skills.header;
  const skillsArr = data.skills.skills;
  const expHeader  = data.experience.header;
  const expArr = data.experience.experience;
  const eduHeader = data.education.header;
  const eduArr = data.education.education;
  const other = data.other;


  function handleArr(header, bodyArr) {
    let combined = `${header}\n`;
    for (const body of bodyArr ) {
      combined += body;
      combined += `\n`;
    }
    return combined;
  }

  const skills = handleArr(skillsHeader, skillsArr);
  const exp = handleArr(expHeader, expArr);
  const edu = handleArr(eduHeader, eduArr);

  const combinedText = (
  `${title}
  ${summary}

  ${skills}

  ${exp}

  ${edu}

  ${other}
  `
  )
  // console.log(combinedText);

  return (
    <Modal show={showModal} onHide={handleClose} size="lg" className='PreviewModal'>
      <Modal.Header closeButton>
        <Modal.Title>{CVTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Your content goes here */}
        <ReactMarkdown>
          {combinedText}
        </ReactMarkdown>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewModal;
