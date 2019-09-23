import * as React from 'react';
import styles from 'styled-components';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

import CloseIcon from '@material-ui/icons/Close';

import { FilterState, MITypes, ListItem, FilterData } from './types';
import { enumToArray } from './help';

const COUNTIES = [
  {
    value: 'ua',
    label: 'Ukraine',
  },
  {
    value: 'ru',
    label: 'Russia',
  },
  {
    value: 'usa',
    label: 'USA',
  },
];

const CITIES = [
  {
    value: 'lviv',
    label: 'Lviv',
  },
  {
    value: 'kiev',
    label: 'Kiev',
  },
  {
    value: 'ivanoFrankivsk',
    label: 'Ivano Frankivsk',
  },
  {
    value: 'odessa',
    label: 'Odessa',
  },
];

const StyledDialogContent = styles(DialogContent)`
  width: 320px
`;

const StyledChip = styles(Chip)`
  margin: 3px 0 3px 6px;
`;

const StyledSelect = styles(Select)`
  .MuiSelect-root {
    white-space: normal;
  }
`;

const FilterSelect = (props: {
  name: string;
  label: string;
  options: ListItem[],
  value: string[];
  onChange: (name: string, nextValue: string[]) => void;
}) => {

  const {
    name,
    label,
    options,
    value,
    onChange,
  } = props;

  return (

    <FormControl fullWidth margin="normal">
      <InputLabel shrink htmlFor={name}>{label}</InputLabel>
      <StyledSelect
        multiple
        displayEmpty
        name={name}
        value={value}
        onChange={({ target }) => onChange(name, target.value)}
        renderValue={(selected: string[]) => {

          if (selected.length === 0) {
            return 'All';
          }

          return selected.map(value => (
            <StyledChip
              key={value}
              onDelete={() => onChange(name, selected.filter(sv => sv !== value))}
              label={options.find(item => item.value === value).label} />
          ));
        }}>
        <MenuItem value={null}>
          <CloseIcon /> All
        </MenuItem>
        {
          options.map(({ value, label }) => (
            <MenuItem
              key={`filter-select-mi-${value}`}
              value={value}>
              {label}
            </MenuItem>
          ))
        }
      </StyledSelect>
    </FormControl>
  );
};

function FilterDialog(props: {
  opened: boolean;
  data: FilterData;
  onConfirm: (filterState: FilterState) => void;
  onCancel: () => void;
  filterState: FilterState;
}) {

  const {
    opened,
    onConfirm,
    onCancel,
    filterState,
  } = props;

  const [state, setState] = React.useState(filterState);

  const handleConfirm = () => onConfirm(state);

  const handleCancel = () => onCancel();
  
  const handleSelectChange = (key, values: string[]) => {

    let nextValue = values;

    if (values.some(itm => itm === null)) {
      nextValue = [];
    }

    setState({ ...state, [key]: nextValue });
  }
  
  const miTypes = enumToArray(MITypes)
    .map((t: string) => ({ value: t.toLocaleLowerCase(), label: t }));

  return (
    <Dialog
      maxWidth="md"
      onClose={handleCancel}
      open={opened}>
      <DialogTitle>Filter</DialogTitle>
      <StyledDialogContent className="filter-content" dividers>

        <FilterSelect
          name="country"
          label="Country"
          options={COUNTIES}
          value={state.country}
          onChange={handleSelectChange} />

        <FilterSelect
          name="city"
          label="City"
          options={CITIES}
          value={state.city}
          onChange={handleSelectChange} />

        <FilterSelect
          name="mi"
          label="MI"
          options={miTypes}
          value={state.mi}
          onChange={handleSelectChange} />

      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>
          Cancel
          </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Filter
          </Button>
      </DialogActions>
    </Dialog>

  )
}

export default FilterDialog;