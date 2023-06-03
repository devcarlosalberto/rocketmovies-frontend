import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
        'header'
        'content';
`;

export const Content = styled.div`
    grid-area: content;
    padding: 3.3rem 12.3rem;

    overflow: auto;

    h1 {
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 4.7rem;
        margin: 2.4rem 0 4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    }
`;

export const Form = styled.div`
    > textarea {
        margin-top: 4rem;
    }
`;

export const TwoCol = styled.div`
    display: flex;
    gap: 4rem;
`;

export const MarksWrapper = styled.div`
    margin-top: 4rem;

    > span {
        font-size: 2rem;
        font-weight: 400;
        line-height: 2.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
`;

export const Marks = styled.div`
    width: 100%;

    display: flex;
    gap: 2.4rem;

    padding: 1.6rem;
    margin-top: 2.4rem;

    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
`;

export const Buttons = styled.div`
    margin-top: 4rem;
`;
