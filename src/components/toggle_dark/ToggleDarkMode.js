import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';

const ThemeToggler = ({ children }) => {
    const [theme, setTheme] = useState(null); // Initialize theme state to null

    useEffect(() => {
        // Only run this on the client side
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no theme is stored
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        // Only run this if theme is not null and on the client side
        if (theme && typeof window !== 'undefined') {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return theme !== null ? children({ theme, toggleTheme }) : null;
};

const SunIcon = ({ className }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            className={className}
            d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const MoonIcon = () => (
    <FontAwesomeIcon
        icon={faMoon}
        size="1x"
        className="hover:scale-105 text-slate"
    />
);


// Usage example
const ToggleDarkMode = () => (
    <ThemeToggler>
        {({ theme, toggleTheme }) => (
            <label>
                <input
                    type="checkbox"
                    id="darkModeToggle"
                    className="hidden"
                    onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                />
                <span>
                    {theme === 'dark' ? (
                        <SunIcon className="hover:scale-105 stroke-yellow-400 fill-yellow-400" />
                    ) : (
                        <MoonIcon />
                    )}
                </span>
            </label>
        )}
    </ThemeToggler>
);

export { ToggleDarkMode };
