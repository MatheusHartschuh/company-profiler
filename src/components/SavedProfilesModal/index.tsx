import React from 'react';
import * as styles from './style';

interface CompanyProfile {
  company_name: string;
  company_description: string;
  tier1_keywords: string[];
  tier2_keywords: string[];
  emails: string[];
  poc: string;
  service_line: string[];
  website?: string;
}

interface SavedProfilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: CompanyProfile[];
  onSelectProfile: (profile: CompanyProfile) => void;
}

export const SavedProfilesModal: React.FC<SavedProfilesModalProps> = ({
  isOpen,
  onClose,
  profiles,
  onSelectProfile,
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h3>Saved Profiles</h3>
        {profiles.length === 0 && <p>No profiles saved yet.</p>}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {profiles.map((profile, index) => (
            <li
              key={index}
              style={styles.modalListItem}
              onClick={() => {
                onSelectProfile(profile);
                onClose();
              }}
            >
              {profile.company_name}
            </li>
          ))}
        </ul>
        <button onClick={onClose} style={styles.button}>Close</button>
      </div>
    </div>
  );
};
