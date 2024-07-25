import withPlugins from "next-compose-plugins";
import withTM from "next-transpile-modules";

const withTMConfig = withTM(["styled-components", "react-tilt", "validator"]);

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default withPlugins([withTMConfig], nextConfig);
