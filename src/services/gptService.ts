import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const generateCompanyProfile = async (companyWebsite: string) => {
    const prompt = `You are a company profiling assistant.
                    Given the company website: ${companyWebsite}, return ONLY a JSON with the following fields:
                    {
                    "company_name": "",
                    "company_description": "",
                    "service_line": [],
                    "tier1_keywords": [],
                    "tier2_keywords": []
                    }
                    Use the website to infer realistic service lines and keywords.
                    If unsure, provide your best guess.
                    Return only the JSON, no explanation or text.`;

    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        }
    );

    const answer = response.data.choices[0].message.content;

    return JSON.parse(answer);
};