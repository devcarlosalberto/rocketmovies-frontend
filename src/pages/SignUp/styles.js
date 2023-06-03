import styled from "styled-components";

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 15.8rem 0 13.6rem;

    > h1 {
        font-size: 4.8rem;
        line-height: 6.3rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > span {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100 };
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

        margin: 4.8rem 0;
    }

    div + div {
        margin-top: 8px;
    }

    button {
        margin: 1.6rem 0 4.2rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        font-weight: 400;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.PINK};

        svg {
            font-size: 2.2rem;
        }
    }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;