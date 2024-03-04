import Link from "next/link";
import PageBanner from "../../_components/PageBanner";

const page = () => {
  return (
    <div className="container">
      <PageBanner pageTitle={"Payment successful"} breadTitle={"Cart"} type={1} />
      <div className="row d-flex justify-content-center my-5">
        <div className="col-lg-6">
          <div>
            <img
              src="https://img.freepik.com/free-vector/wallet-concept-illustration_114360-1647.jpg?w=740&t=st=1709535357~exp=1709535957~hmac=c8619aff458fdfaf3655824a2eb49b1097329255f61e6bd9c159b816a86d743f"
              alt="successful"
              className="img-fluid rounded shadow-sm"
            />
            <p className="my-2 text-success">Payment was successful.</p>
            <Link className="btn btn-success" href={"/"}>Home</Link>
            <Link className="btn btn-primary mx-3" href={"/cart"}>Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
