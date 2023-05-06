import * as yup from "yup";

export const formSchema = yup.object().shape({
  tower: yup.string().required("Поле обязательно к заполнению"),
  floor: yup.string().required("Поле обязательно к заполнению"),
  room: yup.string().required("Поле обязательно к заполнению"),
  timeHour: yup.string().required("Поле обязательно к заполнению"),
  date: yup.string().required("Поле обязательно к заполнению"),
  comment: yup
    .string()
    .required("Поле обязательно к заполнению")
    .max(1000, "Максимум 1000 символов"),
});
