import React, { useState } from 'react';
import axios from 'axios';

interface ApplicantInfo {
    name: string;
    hobby: string;
    favoriteLanguage: string;
    funFact: string;
}

const ApplicantInfo: React.FC = () => {
    const [info, setInfo] = useState<ApplicantInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchInfo = async () => {
        try {
            const response = await axios.get<ApplicantInfo>('http://localhost:8080/awesome/applicant');
            setInfo(response.data);
        } catch (err) {
            setError('Failed to fetch applicant information');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img
                src="/path/to/your/picture.jpg"
                alt="Click to see my info"
                style={{ cursor: 'pointer', width: '200px', borderRadius: '50%' }}
                onClick={fetchInfo}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {info && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{info.name}</h2>
                    <p><strong>Hobby:</strong> {info.hobby}</p>
                    <p><strong>Favorite Language:</strong> {info.favoriteLanguage}</p>
                    <p><strong>Fun Fact:</strong> {info.funFact}</p>
                </div>
            )}
        </div>
    );
};

export default ApplicantInfo;
