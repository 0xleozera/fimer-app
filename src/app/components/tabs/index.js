import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'components';
import { ContainerTabs, Content, Tab } from './styles';

const Tabs = ({ initialTab, tabs, onChange }) => {
  const [active, setActive] = useState(initialTab);

  const handleChange = tab => {
    setActive(tab);
    onChange(tab);
  };

  const renderTabs = () => {
    const mappedTabs = tabs.map(tab => (
      <Tab
        key={tab.key}
        active={active === tab.key}
        onPress={() => handleChange(tab.key)}>
        <Typography
          font={active === tab.key ? 'bold' : 'medium'}
          size="h6"
          type="accent"
          color="regular">
          {tab.title}
        </Typography>
      </Tab>
    ));

    return mappedTabs;
  };

  return (
    <ContainerTabs>
      <Content>{renderTabs()}</Content>
    </ContainerTabs>
  );
};

Tabs.propTypes = {
  initialTab: PropTypes.string,
  tabs: PropTypes.array,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  initialTab: '',
  tabs: [],
  onChange: () => {},
};

export default Tabs;
