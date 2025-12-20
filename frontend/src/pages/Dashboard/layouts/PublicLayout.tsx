import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-vh-100">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
