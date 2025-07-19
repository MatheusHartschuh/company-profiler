import { useState } from 'react';
import { generateCompanyProfile } from './services/gptService';
import { mockCompanyProfiles } from './mock/companyProfiles';

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
        data = mockCompanyProfiles[0];
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
          <h2>Company's Profile</h2>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
