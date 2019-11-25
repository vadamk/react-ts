export enum MITypes {
  Guide, AD, MI, No,
}

export interface Participant {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  mi: keyof typeof MITypes;
}

export interface ParticipantsListState {
  filterOpened: boolean;
  list: Participant[];
  sortColumn?: string;
  sortDirectionAsc: boolean;
}

export interface FilterState {
  country: string[];
  city: string[];
  mi: string[];
}

export interface ListItem {
  value: string;
  label: string;
  tooltip?: string;
}

export interface FilterData {
  country: ListItem[];
  city: ListItem[];
  mi: ListItem[];
}
