import { FaSearch, FaArrowAltCircleDown, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner-container text-white community-cultural-banner">
      <div className="bg-dark p-5">
        <div className="row d-flex justify-content-center align-items-center banner-second-container">
          <div className="col-md-6 col-sm-12">
            <h4>Connecting Communities through Culture</h4>
            <h1 className="title mt-4">
              Explore Diverse Cultures <br /> in Your Community
            </h1>
            <div className="Search-box mt-4">
              <div className="search-input small-box">
                <input
                  type="text"
                  placeholder="Search cultural events..."
                  className="form-control"
                />
                <button className="search-button">
                  <FaSearch color="gray" fontSize="1.5em" />
                </button>
              </div>
              
            
              <div className="search-button-container small-box">
                <button className="search-button-4">
                  <FaSearch color="gray" fontSize="1.5em" />
                  <span className="search-text">Search</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* You can add an image related to the community and cultural theme here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner; 