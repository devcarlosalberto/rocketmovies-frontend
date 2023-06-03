import styled from "styled-components"

export const Container = styled.span`
    width: max-content;

    font-family: "Roboto";
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GHOST_WHITE};
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    padding: 8px 16px 8px 16px;

    border-radius: 8px;
`
