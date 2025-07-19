import * as styles from './style';
import { removeProfile } from '../../utils/localStorageUtils';
import type { CompanyProfile } from '../../utils/localStorageUtils';

interface SavedProfilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: CompanyProfile[];
  onSelectProfile: (profile: CompanyProfile) => void;
  onProfileRemoved: (updatedProfiles: CompanyProfile[]) => void;
}

export const SavedProfilesModal: React.FC<SavedProfilesModalProps> = ({
  isOpen,
  onClose,
  profiles,
  onSelectProfile,
  onProfileRemoved,
}) => {
  if (!isOpen) return null;

  const handleRemove = (companyName: string) => {
    const updated = removeProfile(companyName);
    onProfileRemoved(updated);
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h3 style={styles.modalTitle}>Saved Profiles</h3>
        {profiles.length === 0 && <p style={styles.noProfilesText}>No profiles saved yet.</p>}

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {profiles.map((profile, index) => (
            <li
              key={index}
              style={{
                ...styles.modalListItem,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{ cursor: 'pointer', flex: 1 }}
                onClick={() => {
                  onSelectProfile(profile);
                  onClose();
                }}
              >
                {profile.company_name}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(profile.company_name);
                }}
                style={{ marginLeft: 10 }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <button onClick={onClose} style={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
};
