const Header = () => {
  return (
    <>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                On Tap
              </a>
              <a className="navbar-item" href="/addkeg">
                Add Keg
              </a>
              <a className="navbar-item" href="/about">
                About Us
              </a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-outlined is-small" href="/">
                    Admin Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
