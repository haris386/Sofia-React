import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Uploadsheet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LuUpload } from "react-icons/lu";

// Firebase
import { auth, storage, firestore } from "../../../Firebase/Firebase.jsx";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import pic2 from '../img/pic2.png';

export const Uploadsheet = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      // Check if a file is selected
      if (file) {
        // Generate a unique filename using the user's UID
        const fileName = `${auth.currentUser.uid}_${file.name}`;

        // Reference to the storage location
        const storageRef = ref(storage, "user-uploads/" + fileName);

        // Upload the file
        await uploadBytes(storageRef, file);

        // Get the download URL for the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        // Save the download URL to Firestore or use it as needed
        const userDocRef = doc(firestore, "users", auth.currentUser.uid);
        await setDoc(userDocRef, { uploadedFileURL: downloadURL }, { merge: true });

        // Set the upload status message
        setUploadStatus("File uploaded successfully!");
        
        // Reset the file state after successful upload
        setFile(null);

        console.log("File uploaded successfully!");
      } else {
        console.error("No file selected for upload.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  
  return (
    <>
      <div className="dlup-box">
        <Row>
          <Col md={4}></Col>
          <Col md={4} className="circles-box">
            {/* <div className="circle">
              <span>1</span>
            </div>
            <div className="circle">
              <span>2</span>
            </div>
            <div className="circle">
              <span>3</span>
            </div> */}
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row style={{ marginTop: "5%" }}>
          <Col md={4}></Col>
          <Col md={4}>
            <img src={pic2} alt="" className="download-pic" />
            <Row>
              <span className="img-text">
                Complete Sample Sheet per its Instructions
              </span>
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row style={{ marginTop: "10%" }}>
          <Col md={4}></Col>
          <Col md={4}>
            <input type="file" onChange={handleFileChange} />
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row style={{ marginTop: "1%" }}>
          <Col md={4}></Col>
          <Col md={4}>
          <Button className="download-sheet" onClick={handleUpload}>
              <LuUpload /> Upload Sheet
            </Button>
            {uploadStatus && <div>{uploadStatus}</div>}
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </>
  );
};
