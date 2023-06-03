import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    padding: 1.8rem 1.8rem 1.8rem 1.6rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;

    resize: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
