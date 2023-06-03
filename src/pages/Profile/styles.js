import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;

    > header {
        width: 100%;
        height: 14.4rem;
        padding: 6.4rem 14.4rem 6.4rem 14.4rem;
        background-color: ${({ theme }) =>
            theme.COLORS.BACKGROUND_PINK_TRANSPARENT};
    }

    button {
        margin-top: 2.4rem;
    }
`;

export const Form = styled.div`
    min-width: 34rem;

    display: flex;
    flex-direction: column;

    > div:nth-child(2),
    > div:nth-child(4) {
        margin-bottom: 0.8rem;
    }

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    width: 18.6rem;
    margin: 0 auto;
    position: relative;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        margin-top: -9rem;
        margin-bottom: 6.4rem;
        border-radius: 9.3rem;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 7rem;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_500};
        }
    }
`;
