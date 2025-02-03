import { useEffect, useState } from "react";

const Toast = ({ message, duration = 3000, onClose }) => {
  const [animationStage, setAnimationStage] = useState("hidden");

  useEffect(() => {
    // Show toast and start animation
    setAnimationStage("enter");

    const pauseTimeout = setTimeout(() => setAnimationStage("pause"), 700); // Pause briefly
    const exitTimeout = setTimeout(() => {
      setAnimationStage("exit");
      if (onClose) onClose(); // Trigger onClose after exit animation
    }, 700 + duration);

    return () => {
      clearTimeout(pauseTimeout);
      clearTimeout(exitTimeout);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`fixed z-[110] right-4 bg-blue-500 text-white py-2 px-4 rounded-xl shadow-lg transform transition-transform duration-700 ${
        animationStage === "hidden"
          ? "translate-y-20 opacity-0 pointer-events-none"
          : animationStage === "enter"
          ? "translate-y-10 opacity-100"
          : animationStage === "pause"
          ? "translate-y-6 opacity-100"
          : animationStage === "exit"
          ? "translate-y-0 opacity-0 pointer-events-none"
          : ""
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
