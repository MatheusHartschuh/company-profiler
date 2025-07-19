import * as styles from './style';
import type { CompanyProfile } from '../../utils/localStorageUtils';

interface ListInputGroupProps {
    label: string;
    field: keyof CompanyProfile;
    localProfile: CompanyProfile;
    handleChange: (field: keyof CompanyProfile, value: any) => void;
}

export const ListInputGroup: React.FC<ListInputGroupProps> = ({ label, field, localProfile, handleChange }) => {
    const handleListChange = (index: number, value: string) => {
        const updatedList = [...(localProfile[field] as string[])];
        updatedList[index] = value;
        handleChange(field, updatedList);
    };

    const handleAdd = () => {
        const updatedList = [...(localProfile[field] as string[]), ''];
        handleChange(field, updatedList);
    };

    const handleRemove = (index: number) => {
        const updatedList = [...(localProfile[field] as string[])];
        updatedList.splice(index, 1);
        handleChange(field, updatedList);
    };

    return (
        <div style={{ marginBottom: 15 }}>
            <label style={styles.label}>{label}:</label>
            {(localProfile[field] as string[]).map((item, index) => (
                <div key={index} style={{ display: 'flex', marginBottom: 5 }}>
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => handleListChange(index, e.target.value)}
                        style={{ ...styles.input, flex: 1, marginRight: 5 }}
                    />
                    <button
                        onClick={() => handleRemove(index)}
                        style={styles.buttonRemove}
                        type="button"
                    >
                        -
                    </button>
                </div>
            ))}
            <button onClick={handleAdd} style={styles.button} type="button">
                + Add
            </button>
        </div>
    );
};