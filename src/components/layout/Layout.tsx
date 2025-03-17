import { FC } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Layout: FC = () => {
  const notes = useSelector((store: RootState) => store.notes);
 
  const { id } = useParams();
 
  const note = notes.find((note) => note.id === id);
  
  if (!note) {
    return <Navigate to="/" />;
  }

  return <Outlet context={note} />;
};

export default Layout;
