import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 11.6rem;
    padding: 3rem 12.3rem 3rem 12.3rem;

    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

    > a {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    min-width: fit-content;

    div {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
        }

        button {
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            text-align: right;
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                filter: brightness(1.5);
            }
        }
    }

    img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    }
`
