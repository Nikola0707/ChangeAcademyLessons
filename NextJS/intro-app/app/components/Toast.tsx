import { useEffect } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}
const Toast = ({ message, visible, onClose }: ToastProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000); //Set a timer to close after 3 seconds (Schedules execution of a one-time callback after delay milliseconds.)
      return () => clearTimeout(timer); // Cleanup the timer on unmount or when visible changes
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-16 right-5 w-72 bg-green-600 text-white rounded-lg p-4 shadow-lg transition-opacity duration-300 font-medium">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="mt-2 text-lg border border-gray-100 px-4 rounded-lg "
      >
        Close
      </button>
    </div>
  );
};
export default Toast;
