import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  outlet_id: yup.string().nullable().required(),
});
