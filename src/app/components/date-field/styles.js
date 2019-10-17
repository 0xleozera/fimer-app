import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: ${({ isPlaceholder }) =>
    isPlaceholder ? 'rgba(255,255,255, 0.8)' : '#fff'};
  margin-left: 10px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
`;
