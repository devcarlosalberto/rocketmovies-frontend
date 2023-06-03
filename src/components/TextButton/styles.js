import styled from "styled-components"

export const Container = styled.a`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;
`
