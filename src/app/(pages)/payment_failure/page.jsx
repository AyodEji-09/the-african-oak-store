import Link from "next/link";
import PageBanner from "../../_components/PageBanner";

const page = () => {
  return (
    <div className="container">
      <PageBanner pageTitle={"Payment Failed"} breadTitle={"Cart"} type={1} />
      <div className="row d-flex justify-content-center my-5">
        <div className="col-lg-6">
          <div>
            <img
              src="https://img.freepik.com/free-photo/error-something-went-wrong-construction-concept_53876-133661.jpg?t=st=1709535399~exp=1709538999~hmac=557dbdd6ee0c1539b91bd71e35b5f0431f5254108bd1f397d9fd3783c20abc94&w=996"
              alt="error"
              className="img-fluid rounded shadow-sm"
            />
            <p className="my-2 text-danger">Unable to process payment at this moment, Please try again</p>
            <Link className="btn btn-success" href={"/"}>Home</Link>
            <Link className="btn btn-primary mx-3" href={"/cart"}>Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
