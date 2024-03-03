/* eslint-disable react/no-unescaped-entities */
import { Base } from "../Components/Base";

export const About = () => {
  const handleContact = () => {
    const recipientMail = "pawankumarshedage@gmail.com";
    const mailTo = `mailto:${recipientMail}`;

    const gotoMail = window.open("", "_blank");
    gotoMail.window.location.href = mailTo;

    console.log("hel");
  };
  return (
    <>
      <Base>
        <br />
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center">About Us</h1>
              <br />
              <h4 className="text-center">
                Welcome to <strong>Get Hooked</strong>!
              </h4>

              <h2 className="fw-light">Our Mission</h2>
              <p>
                At <strong>Get Hooked</strong>, we are passionate about sharing
                valuable information, inspiring ideas, and fostering a sense of
                community. Our mission is to provide engaging content that
                educates, entertains, and empowers our readers.
              </p>

              <h2 className="fw-light">Who We Are</h2>
              <p>
                We are a team of dedicated writers and experts from various
                fields who have come together to create a platform where you can
                find insightful articles, useful tips, and engaging stories. Our
                diverse backgrounds and experiences enable us to cover a wide
                range of topics, ensuring there's something for everyone.
              </p>

              <h2 className="fw-light">What We Write About</h2>
              <p className="fw-light">
                Our blog covers a wide array of topics, including but not
                limited to:
              </p>
              <ul>
                <li>Technology</li>
                <li>Space</li>
                <li>Food</li>
                <li>Travel</li>
                <li>News</li>
              </ul>
              <p>
                Whether you're looking for practical advice, thought-provoking
                discussions, or simply a good read, we've got you covered.
              </p>

              <h2 className="fw-light">Why Choose Us</h2>
              <ul>
                <li>
                  <strong>Quality</strong>: We take pride in delivering
                  well-researched, informative, and engaging content.
                </li>
                <li>
                  <strong>Diversity</strong>: Our team brings different
                  perspectives and expertise to the table, ensuring a rich and
                  varied content offering.
                </li>
                <li>
                  <strong>Community</strong>: We value our readers and encourage
                  active participation through comments and feedback.
                </li>
                <li>
                  <strong>Freshness</strong>: We regularly update our content to
                  keep it current and relevant.
                </li>
              </ul>

              <h2 className="fw-light">Connect With Us</h2>
              <p>
                We would love to hear from you, so please feel free to connect
                with us on social media, subscribe to our newsletter, or get in
                touch through our{" "}
                <a
                  type="button"
                  style={{ color: "#FFC017" }}
                  onClick={handleContact}
                >
                  contact page
                </a>
                .
              </p>

              <p>
                Thank you for being a part of our journey at{" "}
                <strong>Get Hooked</strong>. We look forward to sharing our
                insights and stories with you.
              </p>

              <p className="mb-5">Happy reading!</p>
            </div>
          </div>
        </div>
      </Base>
    </>
  );
};
