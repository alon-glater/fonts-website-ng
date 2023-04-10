// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Font } = initSchema(schema);

export {
  Font
};