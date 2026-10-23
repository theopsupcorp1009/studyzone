import PortalNav from "@/components/portalComponents/PortalNav";
import { ToastContainer } from "react-toastify";

export default function PortalLayout({ children }) {
  return (
    <>
      <PortalNav/>
      <main>{children}</main>
      <ToastContainer/>
    </>
  );
}