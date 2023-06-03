import styled from "styled-components"

export const Container = styled.div`
    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 5px;
    }

    svg + svg {
        margin-left: 0.6rem;
    }
`
