function Navbar() {
  return (
    <div>
      <div className="topbar d-flex justify-content-around pt-3 align-items-center bg-dark text-white fs-5">
        <div className="location">
          <p>
            <i class="ph-bold ph-map-pin pe-2 style-cont"></i>Tamale, Ghana
          </p>
        </div>
        <div className="email">
          <p>
            <i class="ph-bold ph-envelope-simple pe-2 style-cont"></i>
            harunzytech@gmail.com
          </p>
        </div>
        <div className="phone">
          <p>
            <i class="ph-bold ph-phone-call pe-2 style-cont"></i>+23354571497
          </p>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm styleinavbar p-3">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            Harunzy<span>Tech</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fs-4" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#">
                  Proects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 reach-out" href="#">
                  Reach Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
