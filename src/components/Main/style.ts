import { colors } from '../../styles/theme';

export const outerContainer = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: colors.background,
};

export const container = {
    backgroundColor: colors.background,
    color: colors.text,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: 20,
    width: '100%',
    maxWidth: 800,
};

export const paragraph = {
    fontSize: 20,
    maxWidth: 800,
    textAlign: 'center' as const,
    marginBottom: 20,
};

export const input = {
    width: 400,
    padding: 14,
    fontSize: 20,
    marginRight: 10,
    borderRadius: 8,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
};

export const button = {
    padding: '14px 28px',
    fontSize: 18,
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
