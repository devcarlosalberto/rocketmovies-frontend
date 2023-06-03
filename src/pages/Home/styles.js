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

export const Content = styled.div`
    width: 100%;
    padding: 4.8rem 12.3rem 3.7rem 12.3rem;

    grid-area: content;

    overflow: auto;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.8rem;

    h2 {
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 4.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    height: 80%;
    overflow: auto;
`
