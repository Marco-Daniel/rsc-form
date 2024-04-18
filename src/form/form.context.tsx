import { createContext, useContext } from 'react';
import { Control } from 'react-hook-form';

type ContextValue = Control<
  {
    username: string;
    planet: string;
  },
  any
>;

export const context = createContext<ContextValue | null>(null);

export const useFormContext = () => {
  const _context = useContext(context);

  if (!_context) throw Error('This needs to be used inside the form');

  return _context;
};

export const Provider = context.Provider;
