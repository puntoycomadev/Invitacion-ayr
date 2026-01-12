import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScrollDownArrow() {
  const arrowRef = useRef();

  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div
      ref={arrowRef}
      className="scroll-down-arrow"
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        cursor: 'pointer',
        opacity: 0.7,
        transition: 'opacity 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M12 19L5 12M12 19L19 12"
          stroke="#6B725C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
