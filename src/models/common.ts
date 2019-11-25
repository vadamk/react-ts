import {
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from 'react';

export type TextFieldElement = HTMLInputElement | HTMLTextAreaElement | undefined;

export type InputChangeEvent = ChangeEvent<TextFieldElement>;
export type InputFocusEvent = FocusEvent<TextFieldElement>;
export type InputBlurEvent = FocusEvent<TextFieldElement>;
export type FormSubmitEvent = FormEvent<HTMLFormElement>;

export interface FormError {
  [fieldName: string]: string[];
}

export interface BlurredFields {
  [fieldName: string]: boolean;
}
