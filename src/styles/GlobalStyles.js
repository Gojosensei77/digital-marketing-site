import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8fafc;
    color: #1a1a1a;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #0A84FF;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #0056d3;
    }
  }

  button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (max-width: 1200px) {
      padding: 0 2rem;
    }
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .btn-primary {
    background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
    color: white;
    border: none;

    &:hover {
      background: linear-gradient(135deg, #0056d3 0%, #003d99 100%);
    }
  }

  .btn-secondary {
    background: white;
    color: #0A84FF;
    border: 2px solid #0A84FF;

    &:hover {
      background: #0A84FF;
      color: white;
    }
  }

  .text-gradient {
    background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 50%, #FFD600 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }

  /* Code syntax highlighting */
  pre {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin: 1rem 0;
  }

  code {
    background: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
  }

  /* Markdown content styling */
  .markdown-content {
    h1, h2, h3, h4, h5, h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    ul, ol {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }

    li {
      margin: 0.5rem 0;
    }

    blockquote {
      border-left: 4px solid #0A84FF;
      padding-left: 1rem;
      margin: 1rem 0;
      color: #666;
      font-style: italic;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
    }

    th, td {
      border: 1px solid #e1e5e9;
      padding: 0.75rem;
      text-align: left;
    }

    th {
      background: #f8f9fa;
      font-weight: 600;
    }
  }
`;

export default GlobalStyles;