import { useState } from 'react';
import { generateCompanyProfile } from '../../services/gptService';
import { mockCompanyProfiles } from '../../mock/companyProfiles';
import { ProfileCard } from '../../components/ProfileCard';
import { SavedProfilesModal } from '../SavedProfilesModal/index.tsx';
import { getSavedProfiles } from '../../utils/localStorageUtils';
import { useMock as useMockConfig } from '../../config';
import * as styles from './style';

export const Main = () => {
    const [website, setWebsite] = useState('');
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [useMock, setUseMock] = useState(useMockConfig);
    const [modalOpen, setModalOpen] = useState(false);
    const [savedProfiles, setSavedProfiles] = useState(() => getSavedProfiles());

    const handleGenerate = async () => {
        if (!website.trim()) {
            alert('Please enter a website URL');
            return;
        }
        setLoading(true);
        try {
            let data;
            if (useMock) {
                const mock = mockCompanyProfiles.find((mock) => mock.website === website);
                if (!mock) {
                    alert('No mock profile found for this website');
                    setLoading(false);
                    return;
                }
                data = mock;
            } else {
                data = await generateCompanyProfile(website);
            }

            const defaultProfile = {
                company_name: '',
                company_description: '',
                poc: '',
                emails: [],
                tier1_keywords: [],
                tier2_keywords: [],
                service_line: [],
            };

            const normalizedProfile = { ...defaultProfile, ...data };
            setProfile(normalizedProfile);
        } catch (error) {
            console.error(error);
            alert('Error generating profile');
        }
        setLoading(false);
    };

    const handleSelectSavedProfile = (selectedProfile: any) => {
        setProfile(selectedProfile);
        setModalOpen(false);
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.container}>
                <h1 style={styles.heading}>Company Profiler</h1>

                <p style={styles.paragraph}>
                    This tool generates a basic company profile from a provided website URL.
                    You can also edit and update the generated information and add points of contact and emails manually.
                    Please enter the full website URL (including https://) and click the button "Generate Profile" to get started!
                </p>

                <div style={styles.inputContainer}>
                    <input
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Enter the company's website"
                        style={styles.input}
                    />
                    <button onClick={handleGenerate} style={styles.button}>
                        Generate Profile
                    </button>

                    <button
                        onClick={() => {
                            setSavedProfiles(getSavedProfiles());
                            setModalOpen(true);
                        }}
                        style={{ ...styles.button, marginLeft: 10 }}
                    >
                        View Saved Profiles
                    </button>
                </div>

                {loading && (
                    <div style={styles.loadingOverlay}>
                        <div style={styles.spinner}></div>
                    </div>
                )}

                {profile && (
                    <ProfileCard
                        profile={profile}
                        onProfileChange={(updated) => setProfile(updated)}
                        onProfileSaved={() => setSavedProfiles(getSavedProfiles())}
                    />
                )}

                <SavedProfilesModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    profiles={savedProfiles}
                    onSelectProfile={handleSelectSavedProfile}
                    onProfileRemoved={(updatedProfiles) => setSavedProfiles(updatedProfiles)}
                />
            </div>
        </div>
    );
};
