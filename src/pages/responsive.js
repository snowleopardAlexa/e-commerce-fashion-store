export const breakpoints = {
    sm: 411,
    md: 768,
    lg: 1366,
  }
  
  export const mediaQueries = (key) => {
    return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
  }