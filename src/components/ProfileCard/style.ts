import { colors } from '../../styles/theme';

export const container = {
    backgroundColor: colors.background,
    color: colors.text,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

export const card = {
    backgroundColor: colors.background,
    color: colors.text,
    borderRadius: 8,
    padding: 20,
    maxWidth: 1000,
    width: '100%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

export const label = {
    display: 'block',
    marginBottom: 8,
    fontWeight: '600',
};

export const input = {
    width: '100%',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    border: `1px solid ${colors.border}`,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.inputBackground,
};

export const textArea = {
    width: '100%',
    height: 80,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    border: `1px solid ${colors.border}`,
    fontSize: 16,
    resize: 'vertical' as const,
    color: colors.inputText,
    backgroundColor: colors.inputBackground,
};


export const button = {
    backgroundColor: colors.buttonColor,
    color: colors.buttonText,
    padding: '10px 20px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
};

export const buttonRemove = {
    backgroundColor: colors.buttonColorRemove,
    color: colors.buttonText,
    padding: '10px 20px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
};

export const heading = {
    marginBottom: 20,
};

export const saveButton = {
  marginTop: '20px',
  width: '100%',
  padding: '15px 30px',
  backgroundColor: colors.buttonColorSave,
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer',
  alignSelf: 'center',
  display: 'block',
};

