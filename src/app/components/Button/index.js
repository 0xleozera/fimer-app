import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import themeConfig from 'configs/theme';
import useTheme from 'hooks/use-theme';

import Icon from 'react-native-vector-icons/Ionicons';

import { If } from 'components';
import { Container, Text, WrapperIcon } from './styles';

const Button = ({
  children,
  loading,
  background,
  hasIcon,
  iconName,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container background={background} {...rest}>
      <If test={loading}>
        <ActivityIndicator size="small" color={theme.colors.primary.contrast} />
      </If>

      <If test={!loading}>
        <If test={hasIcon}>
          <WrapperIcon style={{ transform: [{ rotate: '-25deg' }] }}>
            <Icon
              name="logo-game-controller-b"
              size={20}
              color={theme.colors.primary.contrast}
            />
          </WrapperIcon>
        </If>

        <Text>{children}</Text>
      </If>
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  background: PropTypes.string,
  hasIcon: PropTypes.bool,
  iconName: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  background: themeConfig.colors.primary.dark,
  hasIcon: false,
  iconName: 'logo-game-controller-b',
};

export default Button;
