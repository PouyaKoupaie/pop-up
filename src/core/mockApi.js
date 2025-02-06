const mockApi = async (shouldSucceed = true) => {
    // Simulate a delay using a promise and setTimeout
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
  
    if (shouldSucceed) {
      return {
        success: true,
        message: "Success Api message",
      };
    } else {
      throw {
        success: false,
        ErrorMessage: "Error Api message",
      };
    }
  };
  
  export default mockApi;