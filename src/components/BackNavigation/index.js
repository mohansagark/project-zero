import "./style.scss";
import { IoMdArrowBack, IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackNavigation = ({ title, navigateTo }) => {
  let navigate = useNavigate();

  return (
    <div className="container-fluid back-navigation">
      <div className="row back-navigation-row">
        <div className="col-md-2 back-icon">
          <IoMdArrowBack size={25} onClick={() => navigate(navigateTo)} />
        </div>
        <div className="col-md-8 ">
          <h3 className="text-center">{title}</h3>
        </div>
        <div className="col-md-2 profile-icon">
          <IoMdPerson size={25} />
        </div>
      </div>
    </div>
  );
};

BackNavigation.defaultProps = {
  title: "Project Zero",
  navigateTo: "/",
};

export default BackNavigation;
