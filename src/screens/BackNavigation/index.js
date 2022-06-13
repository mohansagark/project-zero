import "./style.scss";
import { IoMdArrowBack, IoMdPerson } from "react-icons/io";

export default function BackNavigation() {
  return (
    <div className="container-fluid back-navigation">
      <div className="row back-navigation-row">
        <div className="col-md-2 back-icon">
            <IoMdArrowBack size={25} />
        </div>
        <div className="col-md-8 ">
          <h3 className="text-center">Project Zero</h3>
        </div>
        <div className="col-md-2 profile-icon">
          <IoMdPerson size={25} />
        </div>
      </div>
    </div>
  );
}
