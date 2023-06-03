import styled from "styled-components"

export const Container = styled.button`
    width: ${({ size }) => size};
    height: 5.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover(:not(:disabled)) {
        filter: brightness(0.8);
    }

    &:disabled {
        cursor: inherit;
    }
`

export const LoaderSpinAnimation = styled.div`
    width: 2rem;
    height: 2rem;

    border: 2px solid ${({ theme }) => theme.COLORS.PINK};
    border-top: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-left: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 50%;

    animation: spin 1s infinite linear;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`
