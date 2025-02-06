import mockApi from "../core/mockApi";
import useSweetAlert from "../utility/useSweetAlert";

const SweetAlertComponent = () => {
  const showAlert = useSweetAlert();

  const handleSuccess = async () => {
    showAlert({
      title: "your custom title",
      text: "your custom text" ,
      onConfirm: async () => {
        const response = await mockApi(true); // Simulate a successful API call
        return response;
      },
      onClose: () => console.log("Alert closed after success"),
    });
  };

  const handleFailure = async () => {
    showAlert({
      title: 'your custom title',
      text: "your custom text",
      onConfirm: async () => {
        const response = await mockApi(false); // Simulate a failed API call
        return response;
      },
      onClose: () => console.log("Alert closed after failure"),
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Simulate Success</button>
      <button onClick={handleFailure}>Simulate Failure</button>
    </div>
  );
};

export default SweetAlertComponent;