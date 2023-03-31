import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="logo">
              <Link href="/">
                <a>
                  {/* <img src="/img/logo.png" alt="" /> */}
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="#">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="creative_link">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="creative_link">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="wallet-updated">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                walletToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
