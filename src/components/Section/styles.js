import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled(Link)`
    padding: 3.2rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) =>
        theme.COLORS.BACKGROUND_PINK_TRANSPARENT};

    h2 {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

        margin-bottom: 0.8rem;
    }
`

export const Note = styled.div`
    display: flex;
    gap: 0.8rem;

    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.COLORS.PINK};
`

export const SectionText = styled.p`
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    margin-bottom: 3rem;
`

export const Tags = styled.div`
    display: flex;
    gap: 8px;
`
