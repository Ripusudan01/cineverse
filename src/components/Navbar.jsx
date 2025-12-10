import { Link } from "react-router-dom";

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top px-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          CineVerse
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/favourite" className="nav-link">
                Favourites
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control"
              style={{ width: "300px" }}
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}/>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;