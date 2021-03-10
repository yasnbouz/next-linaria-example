import { css } from "linaria";

export const themes = {
  light: css`
    --background-color: hsl(210deg 2% 96%);
    --text-color: hsl(210deg 2% 8%);
    --primary-color: hsl(342deg 82% 55%);
    --font-size-1: 0.75rem;
    --font-size-2: 0.875rem;
    --font-size-3: 1rem;
    --font-size-4: 1.25rem;
    --font-size-5: 1.5rem;
    --font-size-6: 2.25rem;
    --font-size-7: 3rem;
    --font-size-8: 4.5rem;
  `,
  dark: css`
    --background-color: hsl(210deg 2% 8%);
    --text-color: hsl(210deg 2% 96%);
    --primary-color: hsl(342deg 82% 55%);
    --font-size-1: 0.75rem;
    --font-size-2: 0.875rem;
    --font-size-3: 1rem;
    --font-size-4: 1.25rem;
    --font-size-5: 1.5rem;
    --font-size-6: 2.25rem;
    --font-size-7: 3rem;
    --font-size-8: 4.5rem;
  `,
};
