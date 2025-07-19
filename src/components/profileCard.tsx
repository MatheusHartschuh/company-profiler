import React, { useState, useEffect } from 'react';

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
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onProfileChange }) => {
    const [localProfile, setLocalProfile] = useState(profile);

    useEffect(() => {
        setLocalProfile(profile);
    }, [profile]);

    const handleChange = (field: keyof CompanyProfile, value: any) => {
        const updated = { ...localProfile, [field]: value };
        setLocalProfile(updated);
        onProfileChange(updated);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: 15, borderRadius: 8, maxWidth: 600 }}>
            <h3>Company Profile</h3>

            <label>
                Company Name:<br />
                <input
                    type="text"
                    value={localProfile.company_name}
                    onChange={(e) => handleChange('company_name', e.target.value)}
                    style={{ width: '100%' }}
                />
            </label>

            <br /><br />

            <label>
                Company Description:<br />
                <textarea
                    value={localProfile.company_description}
                    onChange={(e) => handleChange('company_description', e.target.value)}
                    style={{ width: '100%', height: 80 }}
                />
            </label>

            <br /><br />

            <label>
                POC:<br />
                <input
                    type="text"
                    value={localProfile.poc}
                    onChange={(e) => handleChange('poc', e.target.value)}
                    style={{ width: '100%' }}
                />
            </label>

            <br /><br />


        </div>
    );
};
