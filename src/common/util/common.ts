import { EMAIL_PATTERN, NAME_PATTERN } from "./constants";

export const validateEmail = (email: string): boolean => {
  return EMAIL_PATTERN.test(email);
};

export const validateName = (name: string): boolean => {
  return NAME_PATTERN.test(name);
};
