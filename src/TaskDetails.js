import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaEye, FaDownload } from 'react-icons/fa';
import './TaskDetails.css';

function TaskDetails() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  });

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };


  return (
    <div className="task-details">
      <div className="task-inputs">
      </div>
      <div className="task-footer">
      <div className="upload-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <button className="upload-button">Upload Document</button>
        <p>Click or drag file to this area to upload from local drive</p>
        <div className="icon-container">
          <img
            src="https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-0-1.png"
            alt="Google Drive"
            className="icon google-drive"
            onClick={() => handleIconClick('https://drive.google.com')}
            width={40}
            height={40}
          />
          <img
            src="https://th.bing.com/th/id/OIP.4jsWAf7wHA7IIwgFSAZOHAHaG4?rs=1&pid=ImgDetMain"
            alt="Dropbox"
            className="icon dropbox"
            onClick={() => handleIconClick('https://www.dropbox.com')}
            width={40}
            height={40}
          />
          <img
            src="https://assets.reviews.com/uploads/2015/12/01011903/microsoft_onedrive_logo1.png"
            alt="OneDrive"
            className="icon onedrive"
            onClick={() => handleIconClick('https://www.onedrive.com')}
            width={40}
            height={40}
          />
          <img
            src="https://images.ctfassets.net/tapz5cpfdvpb/8hvVKqDcedTGYp053fw10/06c34b56d69220ff0f45fd07dbdc3650/Artboard_46.png"
            alt="Box"
            className="icon box"
            onClick={() => handleIconClick('https://www.box.com')}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="attachments">
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <div className="file-info">
                <span>{file.name}</span>
                <span>Added on: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="file-actions">
                <FaEye onClick={() => window.open(file.preview)} />
                <FaDownload onClick={() => window.open(file.preview, '_blank')} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </div>
    </div>
  );
}

export default TaskDetails;
