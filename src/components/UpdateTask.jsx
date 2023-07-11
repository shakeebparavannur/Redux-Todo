import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/task";
import { Button, Modal } from "react-bootstrap";

const UpdateTask = ({ id, task }) => {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState();

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(updateTask(id, task));
  };
  const editInput = (e) => {
    setNewTask(() => e.target.value);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit_ = (id) => {
    if (newTask.trim() !== "") {
      const updatedTask = {
        text: newTask,
        id: id,
      };

      dispatch(updateTask({ id, updatedTask: newTask }));
      setShow(false);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="edit-button">
        Edit
      </Button>

      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" defaultValue={task} onChange={editInput} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => handleEdit_(id)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateTask;
