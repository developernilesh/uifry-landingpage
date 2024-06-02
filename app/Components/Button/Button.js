import './Button.css';

export default function Button({children,className}) {
  return (
      <button id='btn' className={`relative bg-black text-white px-[25px] md:px-[46px] h-[60px] flex justify-center items-center rounded-md z-10 ${className}`}>
        {children}
      </button>
  );
}