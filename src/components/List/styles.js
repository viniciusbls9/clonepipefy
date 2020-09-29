import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${props => props.done ? 0.6 : 1};

    & + div {
        border-left: 1px solid var(--color-border);
    }


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        
        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;    
        }

        button {
            width: 42px;
            height: 42px;
            border-radius: 18px;
            background: var(--color-btn);
            border: 0;
            cursor: pointer;

            img {
                width: 16px;
                height: 16px;
            }
        }
    }

    ul {
        margin-top: 30px;
    }
`;
