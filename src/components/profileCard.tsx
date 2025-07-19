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
      <label>{label}:</label>
      {(localProfile[field] as string[]).map((item, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: 5 }}>
          <input
            type="text"
            value={item}
            onChange={(e) => handleListChange(field, index, e.target.value)}
            style={{ flex: 1, marginRight: 5 }}
          />
          <button onClick={() => handleRemoveFromList(field, index)}>-</button>
        </div>
      ))}
      <button onClick={() => handleAddToList(field)}>+ Add</button>
    </div>
  );

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

      {renderListField('Tier 1 Keywords', 'tier1_keywords')}
      {renderListField('Tier 2 Keywords', 'tier2_keywords')}
      {renderListField('Emails', 'emails')}
      {renderListField('Service Lines', 'service_line')}
    </div>
  );
};
