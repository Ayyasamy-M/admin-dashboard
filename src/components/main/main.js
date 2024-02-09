import "./main.css";
import hello from "../assets/hello.png";
import Chart from "../chart/chart";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title>">
          <img src={hello} alt="hello" />
          <div className="main_greeting">
            <h1>Hello Codersbite</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="main_cards">
          <div className="card">
            <i className="fa fa-user fa-2x text-orange"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Subscribers</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className="card">
            <i class="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-video-camera fa-2x text-blue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts_left">
            <div className="charts_left_title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino,California,USA</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>
          <div className="charts_right">
            <div className="charts_right_title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino,California,USA</p>
              </div>
              <i className="fa fa-use"></i>
            </div>
            <div className="charts_right_cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>
              <div className="card2">
                <h1>Sales</h1>
                <p>$124,300</p>
              </div>
              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>
              <div className="card4">
                <h1>Orders</h1>
                <p>2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
