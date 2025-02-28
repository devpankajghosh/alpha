export interface SignUpFormData {
  identifier: string | undefined;
  password: string | undefined;
}

export interface SignInFormData {
  email_or_phone: string | undefined;
  password: string | undefined;
}
