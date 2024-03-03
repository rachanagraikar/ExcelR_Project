import { Footer } from "./Footer";
import { MyNavbar } from "./MyNavbar";

// eslint-disable-next-line react/prop-types
export const Base = ({ children }) => {
  return (
    <>
      <div>
        <MyNavbar />

        {children}

        <Footer />
      </div>
    </>
  );
};
