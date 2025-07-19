const STORAGE_KEY = 'savedCompanyProfiles';

export const getSavedProfiles = (): any[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveProfile = (profile: any): { success: boolean; message: string } => {
    const profiles = getSavedProfiles();
    if (profiles.length >= 3) {
        return { success: false, message: 'Maximum of 3 saved profiles reached.' };
    }

    profiles.push(profile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    return { success: true, message: 'Profile saved successfully.' };
};
