"use client";

import { store } from "@/redux/store";
import { ConfigProvider } from "antd";
import { AliasToken } from "antd/es/theme/internal";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const customTheme = {
    token: {
      primaryColor: "#a18dff",
    } as Partial<AliasToken>,
  };

  return (
    <Provider store={store}>
      <ConfigProvider theme={customTheme}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ConfigProvider>
    </Provider>
  );
};

export default Providers;
