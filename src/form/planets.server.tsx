import { Suspense } from 'react';
import PlanetsClientSelect from './planets.client';
import Select from '@mui/material/Select';

import { Planet } from './planets.type';

async function PlanetsSelect() {
  const planetsFetch = await fetch('https://swapi.dev/api/planets/');
  const planets = (await planetsFetch.json()) as { results: Planet[] };

  return <PlanetsClientSelect planets={planets.results} />;
}

export default async function PlanetsServerSelect() {
  return (
    <Suspense fallback={<Select disabled />}>
      <PlanetsSelect />
    </Suspense>
  );
}
