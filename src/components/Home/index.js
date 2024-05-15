import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />

    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-img-lg"
        alt="home"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-img-sm"
        alt="home"
      />
    </div>
  </>
)

export default Home
