import type { Preview } from "@storybook/react";
import { withScreenshot } from 'storycap';

import '../src/reboot.css'

export const decorators = [withScreenshot];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
