'use client';

import Select from '@mui/material/Select';
import Option from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';
import { useFormContext } from './form.context';

import { Planet } from './planets.type';

export default function PlanetsClientSelect({ planets }: { planets: Planet[] }) {
  const control = useFormContext();

  return (
    <Controller
      name="planet"
      control={control}
      defaultValue=""
      render={({ field, fieldState }) => (
        <>
          <Select {...field}>
            {planets.map(planet => (
              <Option key={planet.name} value={planet.name}>
                {planet.name}
              </Option>
            ))}
          </Select>
          {fieldState.error?.message ? (
            <span style={{ fontSize: '10px', color: 'red' }}>{fieldState.error.message}</span>
          ) : null}
        </>
      )}
    />
  );
}
