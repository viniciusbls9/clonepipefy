import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: var(--color-background-card);
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 var(--color-shadow);
    border-top: 20px solid var(--color-border-top);
    cursor: grab;

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    }

    p {
        font-weight: 500;
        line-height: 20px;
    }

    img {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-top: 5px;
    }

    ${props => props.isDragging && css `
        border: 2px dashed var(--color-border-dragging);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p, img, header {
            opacity: 0;
        }
    `}
`;

export const Label = styled.span `
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color}
`;