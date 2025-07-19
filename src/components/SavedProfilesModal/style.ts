import { colors } from '../../styles/theme';

export const modalTitle = {
  marginBottom: '20px',
};

export const noProfilesText = {
  marginBottom: '20px',
};

export const modalOverlay = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

export const modalContent = {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 8,
  minWidth: 300,
  maxWidth: '80vw',
};

export const modalListItem = {
  cursor: 'pointer',
  padding: 10,
  borderBottom: '1px solid #ccc',
};

export const button = {
  background: colors.buttonColorRemove,
  padding: '8px 16px',
  marginTop: 10,
  cursor: 'pointer',
  border: 'none',
  borderRadius: '4px',
  color: colors.buttonText,
};
