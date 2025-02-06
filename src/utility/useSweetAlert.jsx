import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import styles from './style.module.css'

const MySwal = withReactContent(Swal);

const useSweetAlert = () => {
  const showAlert = ({ title, text, onConfirm, onClose }) => {
    return MySwal.fire({
      title,
      text: text || "This is not reversible.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      customClass: {
        popup: styles.darkPopup,
        confirmButton: styles.confirmButton,
        cancelButton: styles.cancelButton,
      },
      buttonsStyling: false,
      preConfirm: async () => {
        try {
          const response = await onConfirm();
          if (response?.success) {
            return MySwal.fire({
              icon: "success",
              title: "Success!",
              text: response.message || "Action was succesful",
              confirmButtonText: "OK!",
            });
          } else {
            throw new Error(response?.ErrorMessage || "There's an Error");
          }
        } catch (error) {
          return MySwal.fire({
            icon: "error",
            title: "Error!",
            text: error.ErrorMessage || "Server Error.",
            confirmButtonText: "OK!",
          });
        }
      },
    }).then(() => {
      if (onClose) onClose();
    });
  };

  return showAlert;
};

export default useSweetAlert;
