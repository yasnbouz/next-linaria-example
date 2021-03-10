import { themes } from "../theme";
import useDarkMode from "use-dark-mode";
import { styled } from "linaria/lib/react";

const Toggle = styled.button`
  font-size: var(--font-size-2);
  background-color: var(--text-color);
  color: var(--background-color);
  width: 10em;
  height: 2.5em;
  padding: 0 0.5em;
  font-weight: bold;
  letter-spacing: 1px;
  border: 0;
  margin-left: 1rem;
  margin-top: 1rem;
  transition: background-color 0.25s linear, color 0.25s linear;
  &:hover {
    opacity: 0.92;
    cursor: pointer;
  }
  :focus:not(:focus-visible) {
    outline: 0;
  }
`;

export default function ToggleButton() {
  const darkMode = useDarkMode(false, {
    classNameLight: themes.light,
    classNameDark: themes.dark,
  });
  const nextTheme = darkMode.value ? "Light" : "Dark";
  return <Toggle onClick={darkMode.toggle}>Switch to {nextTheme}</Toggle>;
}
