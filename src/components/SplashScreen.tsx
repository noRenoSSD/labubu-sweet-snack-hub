import { useEffect, useState } from "react";
import logo from "@/assets/mascot.png";

type Props = {
  duration?: number; // ms
  onFinish?: () => void;
};

export default function SplashScreen({ duration = 1600, onFinish }: Props) {
  const [show, setShow] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // small delay to trigger entrance animation
    const t1 = setTimeout(() => setEntered(true), 30);
    // end splash after duration
    const t2 = setTimeout(() => {
      setEntered(false);
      // allow fade-out animation to run
      setTimeout(() => {
        setShow(false);
        onFinish?.();
      }, 250);
    }, duration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [duration, onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white">
      <div
        className={`flex flex-col items-center justify-center transition-all duration-300 ease-out ${
          entered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img src={logo} alt="Labubu" className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-lg" />
      </div>
    </div>
  );
}
