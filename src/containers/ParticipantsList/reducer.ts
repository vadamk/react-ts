import { ParticipantsListState } from './types.model';
import { genParticipant, sortBy } from './help';

const list = Array(5).fill(null).map(genParticipant);

export const initialState: ParticipantsListState = {
  filterOpened: false,
  sortColumn: undefined,
  sortDirectionAsc: true,
  list, // temp
};

export function reducer(
  state: ParticipantsListState,
  { type, payload }: { type: string; payload: any },
): ParticipantsListState {
  switch (type) {
    case 'push':
      return { ...state, list: [...state.list, payload] };
    case 'sort':
      return {
        ...state,
        sortColumn: payload,
        sortDirectionAsc: !state.sortDirectionAsc,
        list: sortBy(state.list, payload, !state.sortDirectionAsc),
      };
    case 'open-filter':
      return {
        ...state,
        filterOpened: payload,
      };
    default:
      throw new Error();
  }
}
