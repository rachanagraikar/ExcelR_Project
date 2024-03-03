import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const handleEmail = () => {
    const recipientMail = "pawankumarshedage@gmail.com";
    const mailTo = `mailto:${recipientMail}`;

    const gotoMail = window.open("", "_blank");
    gotoMail.window.location.href = mailTo;

    console.log("hel");
  };

  const centerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: "60px",
  };

  const emailBtn = {
    color: "#FFC017",
  };
  return (
    <>
      <footer className=" fixed-bottom bg-dark text-light py-3 pb-2">
        <div className="container text-center" style={centerDiv}>
          <p>&copy; 2023 Get Hooked</p>
          &nbsp;
          <p>
            Contact us{" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              onClick={handleEmail}
              style={emailBtn}
              id="emailBtn"
            />
          </p>
        </div>
      </footer>
    </>
  );
};
