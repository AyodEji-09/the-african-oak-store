import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";
import CartProviderComponent from "./_components/provider/CartProvider";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

import "@styles/scss/style.scss";
import "./globals.css";

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* app wrapper */}
        <div className="sb-app">
          <CartProviderComponent>{children}</CartProviderComponent>
          <ScrollbarProgress />
        </div>
        {/* app wrapper end */}
      </body>
    </html>
  );
};
export default Layouts;
