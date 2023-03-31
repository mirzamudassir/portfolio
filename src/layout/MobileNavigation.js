import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.twitter.com/MudassirrMirza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tw.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mudassirmirza/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ln.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <a
              href="#"
              className="metaportal_fn_button wallet_opener"
              onClick={() => walletToggle(true)}
            >
              <span>Wallet</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="creative_link" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="creative_link" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="creative_link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
