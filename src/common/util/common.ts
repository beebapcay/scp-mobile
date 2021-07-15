import { EMAIL_PATTERN, NAME_PATTERN } from "./constants";

export const loginCheck = (username: string, password: string): boolean => {
  if (username.trim() === "" || username.trim().length === 0) {
    return false;
  }

  if (password.trim() === "" || password.trim().length === 0) {
    return false;
  } else if (password.trim().length < 8 || password.trim().length > 30) {
    return false;
  }
  return true;
};

export const resetPasswordCheck = (
  password: string,
  confirmPassword: string
): boolean => {
  if (password.trim() === "" || password.trim().length === 0) {
    return false;
  } else if (password.trim().length < 8 || password.trim().length > 30) {
    return false;
  }

  if (confirmPassword.trim() === "" || confirmPassword.trim().length === 0) {
    return false;
  } else if (
    confirmPassword.trim().length < 8 ||
    confirmPassword.trim().length > 30
  ) {
    return false;
  }

  if (password.trim() !== confirmPassword.trim()) {
    return false;
  }

  return true;
};

export const changePasswordCheck = (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
): boolean => {
  if (oldPassword.trim() === "" || oldPassword.trim().length === 0) {
    return false;
  } else if (oldPassword.trim() === newPassword.trim()) {
    return false;
  } else {
    if (resetPasswordCheck(newPassword, confirmPassword)) {
      return true;
    } else return false;
  }
};

export const validateEmail = (email: string): boolean => {
  return EMAIL_PATTERN.test(email);
};

export const validateName = (name: string): boolean => {
  return NAME_PATTERN.test(name);
};
