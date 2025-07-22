export const useUtils = () => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const sayHello = () => {
    return "Hello from useUtils!";
  };
  return {
    formatDate,
    capitalize,
    sayHello,
  };
}