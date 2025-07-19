import React, { useState, useEffect } from 'react';
import * as styles from './style';
import { saveProfile } from '../../utils/localStorageUtils';
import type { CompanyProfile } from '../../utils/localStorageUtils';
import { ListInputGroup } from './listInputGroup';

interface ProfileCardProps {
    profile: CompanyProfile;
    onProfileChange: (updatedProfile: CompanyProfile) => void;
    onProfileSaved?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onProfileChange, onProfileSaved }) => {
    const [localProfile, setLocalProfile] = useState(profile);

    useEffect(() => {
        setLocalProfile(profile);
    }, [profile]);

    const handleChange = (field: keyof CompanyProfile, value: any) => {
        const updated = { ...localProfile, [field]: value };
        setLocalProfile(updated);
        onProfileChange(updated);
    };

    const handleSave = () => {
        const result = saveProfile(localProfile);
        alert(result.message);
        if (result.success && onProfileSaved) {
            onProfileSaved();
        }
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.heading}>Company Profile</h3>

            <label style={styles.label}>
                Company Name:
                <input
                    type="text"
                    value={localProfile.company_name}
                    onChange={(e) => handleChange('company_name', e.target.value)}
                    style={styles.input}
                />
            </label>

            <label style={styles.label}>
                Company Description:
                <textarea
                    value={localProfile.company_description}
                    onChange={(e) => handleChange('company_description', e.target.value)}
                    style={styles.textArea}
                />
            </label>

            <label style={styles.label}>
                POC:
                <input
                    type="text"
                    value={localProfile.poc}
                    onChange={(e) => handleChange('poc', e.target.value)}
                    style={styles.input}
                />
            </label>

            <ListInputGroup
                label="Tier 1 Keywords"
                field="tier1_keywords"
                localProfile={localProfile}
                handleChange={handleChange}
            />

            <ListInputGroup
                label="Tier 2 Keywords"
                field="tier2_keywords"
                localProfile={localProfile}
                handleChange={handleChange}
            />

            <ListInputGroup
                label="Emails"
                field="emails"
                localProfile={localProfile}
                handleChange={handleChange}
            />

            <ListInputGroup
                label="Service Lines"
                field="service_line"
                localProfile={localProfile}
                handleChange={handleChange}
            />

            <button onClick={handleSave} style={styles.saveButton} type="button">
                Save Profile
            </button>
        </div>
    );
};
