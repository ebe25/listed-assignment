import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <b className="dashboard2">Dashboard</b>
        <input className="search-bar" type="search" placeholder="Search..." />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <img className="vector-icon6" alt="" src="/vector5.svg" />
      </header>

      <aside className="navigation">
        <div className="left-side" />
        <b className="board">Board.</b>

        <img className="dashboard-icon" alt="" src="/dashboard-icon.svg" />
        <a className="dashboard1" target="_blank" href="#">
          Dashboard
        </a>

        <img className="transaction-icon" alt="" src="/transaction-icon.svg" />
        <a className="transactions" target="_blank" href="#">
          Transactions
        </a>

        <img className="schedule-icon" alt="" src="/schedule-icon.svg" />
        <a className="schedules" target="_blank" href="#">
          Schedules
        </a>
        <img className="user-icon" alt="" src="/user-icon.svg" />
        <a className="users" target="_blank" href="#">
          Users
        </a>
        <img className="setting-icon" alt="" src="/setting-icon.svg" />
        <a className="settings" target="_blank" href="#">
          Settings
        </a>
        <div className="help">Help</div>
        <div className="contact-us">Contact Us</div>
      </aside>

      <div className="rightside">
        <div className="total-revenues">
          <div className="card">
            <div className="card5" />
          </div>
          <div className="total-revenues1">Total Revenues</div>
          <b className="b2">$2,129,430</b>
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
        <div className="total-transactions">
          <div className="card">
            <div className="card3" />
            <img
              className="total-transactions-icon"
              alt=""
              src="/total-transactions-icon.svg"
            />
            <div className="total-transactions1">Total Transactions</div>
            <b className="b1">1,520</b>
          </div>
        </div>

        <div className="total-likes">
          <div className="card">
            <div className="card7" />
          </div>
          <div className="total-likes1">Total Likes</div>
          <b className="b3">9,721</b>
          <img className="vector-icon2" alt="" src="/vector2.svg" />
        </div>
        <div className="total-users">
          <div className="card">
            <div className="card1" />
          </div>
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="total-users1">Total Users</div>
          <b className="b">892</b>
        </div>
      </div>

      <div className="activities-card">
        <div className="card8">
          <div className="card9" />
        </div>
        <div className="guest">Guest</div>
        <div className="user">User</div>
        <b className="activities">Activities</b>
        <div className="may-june-2021-parent">
          <div className="may-june">May - June 2021</div>
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </div>
        <div className="chart">
          <div className="parent">
            <div className="div">500</div>
            <div className="group-child" />
          </div>
          <div className="group">
            <div className="div">300</div>
            <div className="group-child" />
          </div>
          <div className="container">
            <div className="div">400</div>
            <div className="group-child" />
          </div>
          <div className="group-div">
            <div className="div">200</div>
            <div className="group-child" />
          </div>
          <div className="parent1">
            <div className="div">100</div>
            <div className="group-child" />
          </div>
          <div className="parent2">
            <div className="div5">0</div>
            <div className="group-child2" />
          </div>
        </div>
        <img className="activities-card-child" alt="" src="/ellipse-3.svg" />
        <img className="activities-card-item" alt="" src="/ellipse-4.svg" />
      </div>
      <div className="top-products-card">
        <div className="card10">
          <div className="card9" />
        </div>
        <div className="div6">
          <img className="child" alt="" src="/ellipse-6.svg" />
          <b className="basic-tees">Basic Tees</b>
          <div className="div7">55%</div>
        </div>
        <div className="may-june-2021-wrapper">
          <div className="may-june1">May - June 2021</div>
        </div>
        <img className="vector-icon4" alt="" src="/vector3.svg" />
        <div className="div8">
          <img className="child" alt="" src="/ellipse-61.svg" />
          <b className="basic-tees">Custom Short Pants</b>
          <div className="div7">31%</div>
        </div>
        <div className="div10">
          <img className="child" alt="" src="/ellipse-62.svg" />
          <b className="basic-tees">Super Hoodies</b>
          <div className="div7">14%</div>
        </div>
        <b className="top-products">Top products</b>
        <img className="pie-chart-icon" alt="" src="/pie-chart.svg" />
      </div>
      <div className="schedules-card">
        <div className="card10">
          <div className="card9" />
        </div>
        <b className="todays-schedule">{`Today’s schedule`}</b>
        <div className="meeting-with-suppliers-from-ku-parent">
          <b className="meeting-with-suppliers">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="div12">14.00-15.00</div>
          <div className="at-sunset-road">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="group-child3" />
        </div>
        <p className="see-all">See All</p>
        <img className="vector-icon5" alt="" src="/vector4.svg" />
        <div className="check-operation-at-giga-factor-parent">
          <b className="meeting-with-suppliers">
            Check operation at Giga Factory 1
          </b>
          <div className="div12">18.00-20.00</div>
          <div className="at-sunset-road">{`at Central Jakarta `}</div>
          <div className="group-child4" />
        </div>
      </div>
      <div className="chart-weeks">
        <div className="week-1">Week 1</div>
        <div className="week-2">Week 2</div>
        <div className="week-3">Week 3</div>
        <div className="week-4">Week 4</div>
      </div>
      <img className="line-chart-2-icon" alt="" src="/line-chart-2.svg" />
      <img className="line-chart-1-icon" alt="" src="/line-chart-1.svg" />
    </div>
  );
};

export default Dashboard;
