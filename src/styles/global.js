import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    :root {
        --color-background: #ecf1f8;
        --color-background-header: #4059ad;
        --color-background-card: #fff;
        --color-text: #333;
        --color-text-white: #fff;
        --color-border: rgba(0, 0, 0, 0.05);
        --color-btn: #97d8c4;
        --color-shadow: rgba(192, 208, 230, 0.8);
        --color-border-top: rgba(230, 236, 245, 0.4);
        --color-border-dragging: rgba(0, 0, 0, 0.2);
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: var(--color-background);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;