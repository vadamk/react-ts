import * as React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const LinkElement = React.forwardRef((props: any, ref: any) => (
  <RouterLink innerRef={ref} {...props} />
));

function CustomLink({ children, to, ...props }: any) {
  return (<Link component={LinkElement} to={to} {...props}>{children}</Link>);
}

export default CustomLink;