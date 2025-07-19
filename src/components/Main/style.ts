import { colors } from '../../styles/theme';

export const container = {
  backgroundColor: colors.background,
  width: '100vw',
  height: '100vh',
  color: colors.text,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
  padding: 20,
  flexDirection: 'column' as const,
};


export const input = {
  width: 300,
  padding: 10,
  marginRight: 10,
  borderRadius: 8,
  border: `1px solid ${colors.border}`,
  backgroundColor: colors.inputBackground,
  color: colors.inputText,
};

export const button = {
  padding: '10px 20px',
  backgroundColor: colors.buttonColor,
  color: colors.buttonText,
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 'bold',
};

export const heading = {
  marginBottom: 20,
};

export const inputContainer = {
  display: 'flex',
  marginBottom: 20,
  flexDirection: 'row' as const,
};
