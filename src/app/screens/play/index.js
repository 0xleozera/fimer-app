import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import useTheme from 'hooks/use-theme';

import { BaseScreen } from 'components';

import Filters from './filters';
import FilterModal from './filter-modal';
import Players from './players';

const Play = () => {
  const theme = useTheme();
  const playLoading = useSelector(state => state.play.isLoading);
  const filterLoading = useSelector(state => state.play.isLoading);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <BaseScreen
      loading={playLoading || filterLoading}
      statusBarBackground={theme.colors.primary.dark}>
      <Filters openModal={value => setIsVisible(value)} />
      <Players />
      <FilterModal
        isVisible={isVisible}
        closeModal={() => setIsVisible(false)}
      />
    </BaseScreen>
  );
};

export default Play;
