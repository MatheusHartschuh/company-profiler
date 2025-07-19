import { useState } from 'react';
import { generateCompanyProfile } from './services/gptService';
import { mockCompanyProfiles } from './mock/companyProfiles';
import { ProfileCard } from './components/profileCard';

function App() {
  const [website, setWebsite] = useState('');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const useMock = true;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      let data;
      if (useMock) {
        const foundProfile = mockCompanyProfiles.find(
          (company) => company.website.toLowerCase() === website.toLowerCase()
        );
        data = foundProfile || mockCompanyProfiles[0];
      } else {
        data = await generateCompanyProfile(website);
      }
      setProfile(data);
    } catch (error) {
      console.error(error);
      alert('Error generating profile');
    }
    setLoading(false);
  };

  const handleProfileChange = (updatedProfile: any) => {
    setProfile(updatedProfile);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Company Profiler</h1>
      <input
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Enter the company's website"
        style={{ width: 300, marginRight: 10 }}
      />
      <button onClick={handleGenerate}>Generate Profile</button>

      {loading && <p>Loading...</p>}

      {profile && (
        <div style={{ marginTop: 20 }}>
          <ProfileCard profile={profile} onProfileChange={handleProfileChange} />
        </div>
      )}

    </div>
  );
}

export default App;
