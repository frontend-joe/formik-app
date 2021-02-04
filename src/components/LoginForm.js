import { Form } from "formik";

export default ({ handleChange, values, errors, isValid, dirty }) => {
  return (
    <Form className="signup">
      {errors.email && <div>{errors.email}</div>}
      <input
        type="email"
        onChange={handleChange}
        value={values.email}
        name="email"
        placeholder="Email"
      />
      {errors.password && <div>{errors.password}</div>}
      <input
        type="password"
        onChange={handleChange}
        value={values.password}
        name="password"
        placeholder="Password"
      />
      <button disabled={!isValid || !dirty}>Submit</button>
    </Form>
  );
};
