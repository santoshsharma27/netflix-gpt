export function checkValidData(fullName, email, password) {
  const isFullNameValid = fullName !== "" || null;

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isFullNameValid)
    return <span>Enter Name is not valid, Please enter valid name</span>;

  if (!isEmailValid)
    return <span>Email is not valid, Please enter valid email address</span>;

  if (!isPasswordValid)
    return (
      <span>
        Password is not valid, Please enter valid password (eg: Test@123)
      </span>
    );

  return null;
}
