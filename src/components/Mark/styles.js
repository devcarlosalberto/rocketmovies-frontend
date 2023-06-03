import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme, isNew }) =>
        isNew ? 'none' : theme.COLORS.GRAY_500};

    border-radius: 8px;
    border: ${({ theme, isNew }) =>
        isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'None'};

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 1.6rem;
        cursor: pointer;
    }

    input {
        width: ${({ inputWidth }) => {
            return inputWidth + 'ch';
        }};

        min-width: 16rem;

        font-family: 'Roboto';
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.GHOST_WHITE};

        padding: 1.6rem;

        background-color: transparent;

        outline: 0;
    }

    button {
        display: flex;
        background-color: transparent;
    }
`;
