import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import React from 'react';
class ToggleDarkMode extends React.Component {
    render() {
        return (
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
                            <FontAwesomeIcon
                                icon={theme === 'dark' ? faMoon : faSun}
                                size="1x"
                                className="hover:scale-105 text-black dark:text-gray-500"
                            />
                        </span>
                        {/* <span>{theme === 'dark' ? 'Dark mode' : 'Light mode'}</span> */}
                    </label>

                )}
            </ThemeToggler>
        )
    }
}

export { ToggleDarkMode };
