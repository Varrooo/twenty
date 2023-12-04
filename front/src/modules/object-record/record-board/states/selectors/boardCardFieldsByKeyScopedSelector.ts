import { selectorFamily } from 'recoil';

import { FieldMetadata } from '@/object-record/field/types/FieldMetadata';

import { BoardFieldDefinition } from '../../types/BoardFieldDefinition';
import { boardCardFieldsScopedState } from '../boardCardFieldsScopedState';

export const boardCardFieldsByKeyScopedSelector = selectorFamily({
  key: 'boardCardFieldsByKeyScopedSelector',
  get:
    (scopeId: string) =>
    ({ get }) =>
      get(boardCardFieldsScopedState(scopeId)).reduce<
        Record<string, BoardFieldDefinition<FieldMetadata>>
      >((result, field) => ({ ...result, [field.fieldMetadataId]: field }), {}),
});