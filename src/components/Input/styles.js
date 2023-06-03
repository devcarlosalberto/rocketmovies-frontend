import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    border-radius: 1rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-left: 1.6rem;
    }

    > input {
        width: 100%;
        padding: 1.8rem 1.8rem 1.8rem 1.6rem;

        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    > input::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;