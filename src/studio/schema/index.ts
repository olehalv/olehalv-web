import { SchemaTypeDefinition } from 'sanity';

import home from './home.tsx';
import projects from './projects.ts';
import skills from './skills.ts';

export const schemas: Array<SchemaTypeDefinition> = [home, skills, projects];
