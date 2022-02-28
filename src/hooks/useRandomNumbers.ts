export const useRandomNumbers = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5);
};
