const Header = () => {
  return (
    <>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <h1 is-size-1>Phil's Taproom</h1>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/keglist">
                On Tap
              </a>
              <a className="navbar-item" href="/addkeg">
                Add Keg
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
