import React from 'react';
import styles from './Download.module.css';
import Button from 'react-bootstrap/Button';
const Download = ({ file }) => {
  async function downloadFile() {
    try {
      if (file) {
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute(
          'href',
          URL.createObjectURL(
            new Blob([await file.getBuffer('image/jpeg')], {
              type: 'image/jpeg',
            }),
          ),
        );
        downloadLink.setAttribute('download', true);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
      alert(
        'Sorry, there was an issue downloading the file. Please try again later.',
      );
    }
  }
  return (
    <Button
      onClick={() => downloadFile()}
      style={{
        backgroundColor: 'rgb(76, 147, 5) ',
        color: 'rgb(228, 226, 226)',
        fontWeight: 'bold',
        width: '200px',
      }}
      onMouseEnter={e => (e.target.style.backgroundColor = 'rgb(58, 112, 5)')}
      onMouseLeave={e => (e.target.style.backgroundColor = 'rgb(76, 147, 5)')}
    >
      Download
    </Button>
  );
};

export default Download;
