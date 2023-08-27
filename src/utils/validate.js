export function checkValidData(fullName, email, password) {
  const isFullNameValid = fullName !== "" || null;

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isFullNameValid)
    return (
      <span className="text-red-600">
        Enter Name is not valid, Please enter valid name
      </span>
    );

  if (!isEmailValid)
    return (
      <span className="text-red-600">
        Email is not valid, Please enter valid email address
      </span>
    );

  if (!isPasswordValid)
    return (
      <span className="text-red-600 pt-3">
        Password is not valid, Please enter valid password
      </span>
    );

  return null;
}
