import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import useTheme from 'hooks/use-theme';
import useNavigation from 'hooks/use-navigation';

import { If } from 'components';
import { Container, Informations, ContainerBackButton } from './styles';

const Header = ({ hasBackButton, children }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <Informations>
        <If test={hasBackButton}>
          <ContainerBackButton onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              size={25}
              color={theme.colors.primary.contrast}
            />
          </ContainerBackButton>
        </If>
        {children}
      </Informations>
    </Container>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  hasBackButton: PropTypes.bool,
};

Header.defaultProps = {
  hasBackButton: true,
};

export default Header;
