import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100dvh;
`

export const LoaderAnimation = styled.div`
    width: 10rem;
    height: 10rem;

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;

    transform: translate(-50%, -50%);

    border: 4px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-top: 4px solid ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    animation: spin 1.5s infinite linear;

    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }

        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`
