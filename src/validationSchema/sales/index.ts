import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  sale_date: yup.date().required(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
});
