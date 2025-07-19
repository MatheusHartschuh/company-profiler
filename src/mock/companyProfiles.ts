export interface CompanyProfile {
  website: string;
  company_name: string;
  service_line: string[];
  company_description: string;
  tier1_keywords: string[];
  tier2_keywords: string[];
  emails: string[];
  poc: string;
}

export const mockCompanyProfiles: CompanyProfile[] = [
  {
    website: "https://simplesolar.com",
    company_name: "Simple Solar Inc",
    service_line: ["Solar Panel Installation"],
    company_description: "Simple Solar Inc provides affordable solar energy solutions.",
    tier1_keywords: ["solar", "renewable energy", "solar panels"],
    tier2_keywords: ["clean energy", "photovoltaics"],
    emails: [],
    poc: "",
  },
  {
    website: "https://techinnovators.com",
    company_name: "Tech Innovators Ltd",
    service_line: ["Cybersecurity", "Software Development", "Cloud Services"],
    company_description: "Tech Innovators Ltd offers advanced IT solutions to enterprises worldwide.",
    tier1_keywords: ["cybersecurity", "cloud computing", "software development"],
    tier2_keywords: ["IT consulting", "network security"],
    emails: [],
    poc: "",
  },
  {
    website: "https://futureent.com",
    company_name: "Future Enterprises",
    service_line: [],
    company_description: "A startup focused on innovative tech solutions.",
    tier1_keywords: [],
    tier2_keywords: [],
    emails: [],
    poc: "",
  },
];