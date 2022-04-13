import React from 'react';
import Modal from './Modal';

import PdfViewer from '../PdfViewer';


function PdfModal({onClick, file}) {
  return (
    <Modal onClick={onClick} pdf>
      <PdfViewer file={file} />
    </Modal>
  );
};

export default PdfModal;





