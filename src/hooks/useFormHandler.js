import { useState } from 'react'

const useFormHandler = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const resetField = (fieldName) => {
    setValues((prev) => ({ ...prev, [fieldName]: initialValues[fieldName] ?? '' }))
  }

  const setFieldValue = (fieldName, value) => {
    setValues((prev) => ({ ...prev, [fieldName]: value }))
  }

  return {
    values,
    handleChange,
    resetField,
    setFieldValue,
  }
}

export default useFormHandler
