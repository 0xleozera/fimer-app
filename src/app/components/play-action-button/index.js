import React from 'react';
import PropTypes from 'prop-types';

import themeConfig from 'configs/theme';
import useTheme from 'hooks/use-theme';

import Icon from 'react-native-vector-icons/Ionicons';

import { If } from 'components';
import {
  Container,
  ContainerIcon,
  ContainerForbidden,
  Forbidden,
} from './styles';

const PlayActionButton = ({ background, iconName, forbidden, ...rest }) => {
  const theme = useTheme();

  return (
    <Container background={background} {...rest}>
      <If test={forbidden}>
        <ContainerIcon>
          <Icon
            name={iconName}
            size={30}
            color={theme.colors.primary.contrast}
          />
          <ContainerForbidden style={{ transform: [{ rotate: '25deg' }] }}>
            <Forbidden />
          </ContainerForbidden>
        </ContainerIcon>
      </If>

      <If test={!forbidden}>
        <Icon name={iconName} size={30} color={theme.colors.primary.contrast} />
      </If>
    </Container>
  );
};

PlayActionButton.propTypes = {
  background: PropTypes.string,
  iconName: PropTypes.string,
  forbidden: PropTypes.bool,
};

PlayActionButton.defaultProps = {
  background: themeConfig.colors.primary.dark,
  iconName: 'logo-game-controller-b',
  forbidden: false,
};

export default PlayActionButton;
