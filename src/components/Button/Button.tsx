// 'use client';  // This makes the component client-side only
'use client';

import React from 'react';

type ButtonProps = {
    onClick?: () => void; // Optional click handler
    children: React.ReactNode; // Button label
    variant?: 'primary' | 'secondary' | 'outline' | 'danger'; // Button style variant
    size?: 'small' | 'medium' | 'large'; // Button size
    isLoading?: boolean; // Loading state
    isDisabled?: boolean; // Disabled state
    className?: string; // Custom class names for further styling
    style?: React.CSSProperties; // Inline styles
    ariaLabel?: string; // Accessible label
};

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    isDisabled = false,
    className = 'flex items-center justify-center gap-2',
    style,
    ariaLabel,
}) => {
    const baseStyles = 'rounded focus:outline-none';
    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };
    const variantClasses = {
        primary: `
        relative inline-block rounded-lg bg-gradient-to-r 
        from-[#141414] via-[#3707B8] to-[#141414] text-white 
        before:content-[''] before:absolute before:inset-[-1px] 
        before:rounded-lg before:bg-gradient-to-r 
        before:from-white before:to-[#7E4DFF] before:-z-10
        transition-all before:duration-500
        hover:before:opacity-50 hover:bg-gradient-to-r hover:from-[#3707B8] hover:to-[#141414]
        hover:before:from-[#7E4DFF] hover:before:to-white`,
        secondary: 'bg-[#FFD11A] text-[#141414] transition-all duration-500 hover:bg-[#FFDD58] rounded-lg',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    };

    const isButtonDisabled = isLoading || isDisabled;

    return (
        <button
            onClick={!isButtonDisabled ? onClick : undefined}
            className={`${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            style={style}
            aria-label={ariaLabel}
            disabled={isButtonDisabled}
        >
            {isLoading ? (
                <span className="spinner"></span> // A simple spinner or loader component
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
