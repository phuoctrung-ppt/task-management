/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLAttributes } from 'react';

export type OverrideProps<T = any> = T & HTMLAttributes<unknown>;
