import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .masonry-grid {
    display: flex;
    margin: 10px -10px 0; /* Adds a gap on top and adjusts horizontal spacing */
    width: auto;
  }

  .masonry-grid-column {
    padding: 0 10px; /* Horizontal gap between columns */
    background-clip: padding-box;
  }

  .masonry-grid-column > div {
    margin-bottom: 20px; /* Vertical gap between images */
  }
`;

export default GlobalStyles;
