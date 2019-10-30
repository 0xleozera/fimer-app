import React, { forwardRef } from 'react';

import { Input } from './styles';

const ChatField = ({ style, icon, ...rest }, ref) => (
  <Input {...rest} ref={ref} />
);

export default forwardRef(ChatField);
