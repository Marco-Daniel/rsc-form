'use client';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { useFormContext } from './form.context';

export default function UserNameField() {
  const control = useFormContext();

  return (
    <Controller
      name="username"
      control={control}
      defaultValue=""
      render={({ field, fieldState }) => (
        <>
          <TextField {...field} label="User Name" variant="outlined" fullWidth />
          {fieldState.error?.message ? (
            <span style={{ fontSize: '10px', color: 'red' }}>{fieldState.error.message}</span>
          ) : null}
        </>
      )}
    />
  );
}
