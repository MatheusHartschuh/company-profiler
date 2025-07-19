export interface CompanyProfile {
    company_name: string;
    company_description: string;
    tier1_keywords: string[];
    tier2_keywords: string[];
    emails: string[];
    poc: string;
    service_line: string[];
    website?: string;
}

const STORAGE_KEY = 'savedCompanyProfiles';

export const getSavedProfiles = (): any[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveProfile = (profile: any): { success: boolean; message: string } => {
    const profiles = getSavedProfiles();

    const exists = profiles.some(p => p.company_name === profile.company_name);
    if (exists) {
        return { success: false, message: 'A profile with this company name already exists.' };
    }

    if (profiles.length >= 5) {
        return { success: false, message: 'Maximum of 5 saved profiles reached.' };
    }

    profiles.push(profile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    return { success: true, message: 'Profile saved successfully.' };
};


export const removeProfile = (companyName: string): CompanyProfile[] => {
    const saved = getSavedProfiles();
    const filtered = saved.filter((p) => p.company_name !== companyName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
};

