// 'use client'; ensures this component is a Client Component in Next.js 15
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
    className = '',
    style,
    ariaLabel,
}) => {
    const baseStyles = 'transition-all duration-200 rounded focus:outline-none';
    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };
    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
        danger: 'bg-red-500 text-white hover:bg-red-600',
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
