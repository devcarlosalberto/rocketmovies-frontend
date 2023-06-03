import { useState } from 'react';
import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from './styles';

export function Mark({ isNew, value = '', onClick, onChange, ...rest }) {
    const [charsLength, setCharsLength] = useState(value.length);

    function handleChange(event) {
        const charsLength = event.target.value.length;
        setCharsLength(charsLength);

        onChange(event);
    }

    return (
        <Container isNew={isNew} inputWidth={charsLength}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                readOnly={!isNew}
                {...rest}
            />
            <button type="button" onClick={onClick}>
                {isNew ? <FiPlus size={22} /> : <FiX size={22} />}
            </button>
        </Container>
    );
}
