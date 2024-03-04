import Header from "../_layouts/headers/Index";
import Footer from "../_layouts/footers/Index";

const PagesLayouts = ({
  children
}) => {
  return (
    <>
      <Header layout={"default"} />

      {/* dynamic content */}
      <div id="sb-dynamic-content" className="sb-transition-fade">
        {children}
        
        <Footer layout={"default"} />
      </div>
      {/* dynamic content end */}
    </>
  );
};
export default PagesLayouts;
