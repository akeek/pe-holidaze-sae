import React, { useState } from "react";
import { schemaLogin } from "../../components/SchemaReg";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../styles/login.module.css";
import "react-toastify/dist/ReactToastify.css";


function LogIn() {
  const [setShowAlert] = useState(false);
  const initialValues = { email: "", password: "" };

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        setShowAlert(true);
        toast.success('Login was great success!', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error('Invalid email or password', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      validationSchema={schemaLogin}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {(formik) => {
        const { handleSubmit } = formik;
        return (
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.wrap}></div>

                <div>
                  <label>Email</label>
                  <Field
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail adress"
                    readOnly={false}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>

                <div>
                  <label>Password</label>
                  <Field
                    className={styles.input}
                    type="text"
                    name="password"
                    placeholder="Enter your password"
                    readOnly={false}
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error"
                  />
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className={styles.formBtn}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Log In
              </Button>
            </Modal.Footer>
            <ToastContainer position="top-center" autoClose={5000} />
          </Modal.Dialog>
        );
      }}
    </Formik>
  );
}

export default LogIn;
