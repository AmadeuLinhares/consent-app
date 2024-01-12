import { Checkbox } from '@components/CheckBox'
import { Input } from '@components/Input'
import { PageLayout } from '@layouts/PageLayout'
import { Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
type Form = {
  name: string
  checkbox: boolean
}

export const ConsentCollectionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()
  const submit = (data: Form) => {
    console.log(data)
  }

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(submit)}>
        <Typography variant="body1">ConsentCollectionForm</Typography>
        <Input
          {...register(`name`, {
            required: {
              value: true,
              message: `Field require`,
            },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          placeholder="teste"
        />
        <Checkbox
          label={`dkjhdkjdh`}
          {...register(`checkbox`, {
            required: {
              value: true,
              message: `Field require`,
            },
          })}
          helperText={errors.checkbox?.message}
        />
        <button type="submit">send</button>
      </form>
    </PageLayout>
  )
}
