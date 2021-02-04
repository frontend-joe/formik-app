import { Formik } from "formik";

import LoginForm from "./LoginForm";
import LoginSchema from "./LoginSchema";

export default () => {
  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <Formik
      component={LoginForm}
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    />
  );
};
