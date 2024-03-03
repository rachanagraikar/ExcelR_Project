/* eslint-disable react/prop-types */
import { Toast } from "react-bootstrap";

export const ErrorToast = ({ show, onClose, message }) => {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide>
      <Toast.Header>
        <strong className="mr-auto">Error</strong>
      </Toast.Header>
      <Toast.Body style={{ color: "red" }}>{message}</Toast.Body>
    </Toast>
  );
};
