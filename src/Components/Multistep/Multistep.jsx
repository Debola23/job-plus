import Styles from './Multistep.module.css'
import React, { useState, useEffect } from "react";

const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
  </svg>
);

const CheckFilled = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 001.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);


export const Multistep = ({ loadingStates, loading, duration = 2000, loop = true, onClose }) => {

      const [currentStep, setCurrentStep] = useState(0);


        useEffect(() => {
            if (!loading) {
            setCurrentStep(0);
            return;
            }

            const timer = setTimeout(() => {
            setCurrentStep((prev) => {
                if (loop) {
                return prev === loadingStates.length - 1 ? 0 : prev + 1;
                } else {
                return Math.min(prev + 1, loadingStates.length - 1);
                }
            });
            }, duration);

            return () => clearTimeout(timer);
        }, [currentStep, loading, loop, loadingStates.length, duration]);

        if (!loading) return null;

 
  return (
    <div className={Styles.mStep}>
      <button onClick={onClose} className={Styles.btnClose}>
        ✕
      </button>

      <div style={{ maxWidth: 400, width: "100%" }}>
        {loadingStates.map((step, i) => {
          const opacity = Math.max(1 - Math.abs(i - currentStep) * 0.3, 0);
          return (
            <div
              key={i}
              className={Styles.check}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                opacity,
                transition: "opacity 0.5s ease",
                marginBottom: "1rem",
                color: i === currentStep ? "#a3e635" : "white",
                fontWeight: i === currentStep ? "bold" : "normal",
                fontSize: i === currentStep ? "1.2rem" : "1rem",
              }}
            >
              <div style={{ minWidth: 24, minHeight: 24 }}>
                {i <= currentStep ? (
                  i === currentStep ? (
                    <CheckFilled style={{ width: 34, height: 36, color: "#a3e635" }} />
                  ) : (
                    <CheckIcon style={{ width: 34, height: 36, color: "white" }} />
                  )
                ) : null}
              </div>
              <span>{step.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
