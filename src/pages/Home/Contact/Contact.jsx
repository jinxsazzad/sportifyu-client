import {
  FaClock,
  FaMailBulk,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#F5F7F9]">
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5" >
        <div className="flex justify-center items-center p-10">
          <FaSearchLocation className="text-5xl me-2" />
          <p>
            Long Avenue 36
            <br />
            New Yersey, CA 96120
          </p>
        </div>
        <div className="flex justify-center items-center p-10">
          <FaMailBulk className="text-5xl me-2" />
          <p>
            learntoswim@office.au <br />
            courses@office.au
          </p>
        </div>
        <div className="flex justify-center items-center p-10">
          <FaPhoneAlt className="text-5xl me-2" />
          <p>
            Mon-Fri: 8:00-20:00
            <br />
            Sat: 8:00-21:00
          </p>
        </div>
        <div className="flex justify-center items-center p-10">
          <FaClock className="text-5xl me-2" />
          <p>
            Don't hesitate to call <br />
            +88016119xxxx
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
