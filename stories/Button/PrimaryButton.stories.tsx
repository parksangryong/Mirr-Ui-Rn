import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { View } from "react-native";
import { ThemeProvider } from "../../src/theme/ThemeContext";
import PrimaryButton from "../../src/components/Button/PrimaryButton";

const meta = {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <ThemeProvider
        initialColors={{
          primary: "green",
          secondary: "blue",
          success: "green",
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { title: "Button" },
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Button",
  },
};
