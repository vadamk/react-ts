export enum MITypes {
  Guide, AD, MI, No
}

export class Participant {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  mi: keyof typeof MITypes;
}

export class ParticipantsListState {
  filterOpened: boolean;
  list: Participant[];
  sortColumn: string;
  sortDirectionAsc: boolean;
}

export class FilterState {
  country: string[];
  city: string[];
  mi: string[];
}

export class ListItem {
  value: string;
  label: string;
  tooltip?: string;
}

export class FilterData {
  country: ListItem[];
  city: ListItem[];
  mi: ListItem[];
}