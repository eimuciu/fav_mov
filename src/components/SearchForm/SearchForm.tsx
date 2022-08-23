import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@chakra-ui/react';
import css from './SearchForm.module.css';

const formValidation = Yup.object({
  title: Yup.string().trim().required('Required'),
});

function SearchForm() {
  const formik = useFormik({
    initialValues: { title: '', description: '' },
    validationSchema: formValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, action) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <Input
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Search movie title..."
        isInvalid={!!formik.touched.title && !!formik.errors.title}
        errorBorderColor="crimson"
      />
      <Button type="submit">Find</Button>
    </form>
  );
}

export default SearchForm;
