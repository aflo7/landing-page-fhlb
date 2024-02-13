import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function App() {
  return (
    <>
      <div className="the-wrapper">
        <nav>
          <h1>FHLB LOGO</h1>
          <div className="desktop-right-nav">
            <div>Who We Are</div>
            <div>Our Members</div>
            <div>Housing Programs</div>
            <div>Careers</div>
            <div>Login</div>
            <div className="desktop-burger-wrapper">
              <GiHamburgerMenu className="desktop-burger" />
              <div className="more-text">More</div>
            </div>
          </div>
          <GiHamburgerMenu className="mobile-burger" />
        </nav>

        <main>
          <h2>
            You plant the seed, we provide liquidity, and together we grow
          </h2>
          <button className="learn-who-btn">
            Learn who we are and what we do
          </button>
        </main>
      </div>
    </>
  );
}
