import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100dvh;

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
        "header"
        "content";
`

export const Content = styled.main`
    width: 100%;
    padding: 4rem 12.3rem 0 12.3rem;

    grid-area: content;

    overflow: auto;
    a {
        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.PINK};

        margin-bottom: 2.4rem;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-bottom: 2.4rem;

    h1 {
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 4.7rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    }

    svg {
        font-size: 2.3rem;
        color: ${({ theme }) => theme.COLORS.PINK};

        margin-top: 5px;
    }

    svg + svg {
        margin-left: 1rem;
    }
`

export const Creator = styled.div`
    display: flex;
    gap: 1.4rem;
    margin-bottom: 4rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

    .author {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .date {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    img {
        display: flex;
        align-items: center;
        flex-direction: row;

        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    }

    svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Tags = styled.div`
    display: flex;
    gap: 8px;

    margin-bottom: 4rem;
`

export const Tag = styled.span`
    font-family: "Roboto";
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GHOST_WHITE};
    background-color: ${({ theme }) =>
        theme.COLORS.BACKGROUND_PINK_TRANSPARENT};

    padding: 8px 16px 8px 16px;

    border-radius: 8px;
`

export const Text = styled.div`
    overflow: auto;

    height: 50%;

    p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    }

    p + p {
        margin-top: 2rem;
    }
`
