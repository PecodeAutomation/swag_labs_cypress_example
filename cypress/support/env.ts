export const getEnvironment = () => {
  const env = Cypress.env();
  return {
    ...env,
    ...env.dev
  };
};