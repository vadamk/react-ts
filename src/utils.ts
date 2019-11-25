import { ValidationError } from 'yup';
import { BlurredFields, FormError } from 'models/common';

export const toFormError = (
  error: ValidationError,
  blurredFields?: BlurredFields,
): FormError => {

  let rawErrors = error.inner;

  if (blurredFields) {
    rawErrors = rawErrors.filter((err: ValidationError) => blurredFields[err.path]);
  }

  return rawErrors
    .reduce((res, cur) => ({ ...res, [cur.path]: cur.errors }), {});
};
