import React, { useState, useEffect } from 'react';
import * as styles from './style';
import { saveProfile, getSavedProfiles } from '../../utils/localStorageUtils';

interface CompanyProfile {
    company_name: string;
    company_description: string;
    tier1_keywords: string[];
    tier2_keywords: string[];
    emails: string[];
    poc: string;
    service_line: string[];
}

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

    const handleListChange = (field: keyof CompanyProfile, index: number, value: string) => {
        const updatedList = [...(localProfile[field] as string[])];
        updatedList[index] = value;
        handleChange(field, updatedList);
    };

    const handleAddToList = (field: keyof CompanyProfile) => {
        const updatedList = [...(localProfile[field] as string[]), ''];
        handleChange(field, updatedList);
    };

    const handleRemoveFromList = (field: keyof CompanyProfile, index: number) => {
        const updatedList = [...(localProfile[field] as string[])];
        updatedList.splice(index, 1);
        handleChange(field, updatedList);
    };

    const renderListField = (label: string, field: keyof CompanyProfile) => (
        <div style={{ marginBottom: 15 }}>
            <label style={styles.label}>{label}:</label>
            {(localProfile[field] as string[]).map((item, index) => (
                <div key={index} style={{ display: 'flex', marginBottom: 5 }}>
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => handleListChange(field, index, e.target.value)}
                        style={{ ...styles.input, flex: 1, marginRight: 5 }}
                    />
                    <button
                        onClick={() => handleRemoveFromList(field, index)}
                        style={styles.buttonRemove}
                        type="button"
                    >
                        -
                    </button>
                </div>
            ))}
            <button onClick={() => handleAddToList(field)} style={styles.button} type="button">
                + Add
            </button>
        </div>
    );

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

            {renderListField('Tier 1 Keywords', 'tier1_keywords')}
            {renderListField('Tier 2 Keywords', 'tier2_keywords')}
            {renderListField('Emails', 'emails')}
            {renderListField('Service Lines', 'service_line')}

            <button
                onClick={() => {
                    const result = saveProfile(localProfile);
                    alert(result.message);
                    if (result.success && onProfileSaved) {
                        onProfileSaved();
                    }
                }}
                style={styles.saveButton}
            >
                Save Profile
            </button>

        </div>
    );
};
