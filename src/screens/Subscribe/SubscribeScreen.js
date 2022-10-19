import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { subscribe } from "../../features/planSlice";

// style
import "./SubscribeScreen.css";

function SubscribeScreen() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goSubscribe = () => {
    dispatch(subscribe(state));
    navigate("/");
  };
  return (
    <div className="subscribeScreen">
      <div className="subscribeScreen__left">
        <div className="subscribeScreen__left--container">
          <div className="subscribeScreen__left--logo">
            <img
              className="logo"
              src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
              alt="payment logo"
            />
            <h4>test mode</h4>
          </div>
          <div className="subscribeScreen__left--info">
            <h4>Subscribe to {state.type}</h4>
            <div>
              <p>{state.price}</p>
              <span>per month</span>
            </div>
          </div>
          <div className="subscribeScreen__left--footer">
            <p>
              Powered by <b>stripe</b>
            </p>
            <span>|</span>
            <p>
              <span>Terms</span> <span>Privacy</span>
            </p>
          </div>
        </div>
      </div>
      <div className="subscribeScreen__right">
        <div className="subscribeScreen__right--container">
          <div className="subscribeScreen__payoptions">
            <div className="gpay--container">
              <img
                className="gpay--logo"
                src="https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/5178B7EE-CB0A-4958-8639A1B0028E2F56/webimage-10B13DE9-ABD9-4318-B33EF188C9F552F5.jpg"
                alt="gpaylogo"
              />
            </div>
          </div>
          <h3 className="options--text">
            <span>Or pay with card</span>
          </h3>
          <from className="form">
            <div className="form--email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form--card">
              <label htmlFor="">Card information</label>
              <div className="card--field">
                <img
                  className="cart--img"
                  src="https://milabrush.az/wp-content/uploads/2019/06/visa-and-mastercard-logo_364449.png"
                  alt="visa logo"
                />
                <input type="email" placeholder="123 123 123" />
              </div>
              <div className="card__subinfo">
                <input type="text" placeholder="MM / YY" />
                <input type="text" placeholder="CVC" />
              </div>
            </div>
            <div className="form--nameOnCard">
              <label htmlFor="nameoncard">Name on card</label>
              <input type="text" />
            </div>
            <div className="form--selectCountry">
              <label htmlFor="cars">Country or Region</label>
              <select name="cars" id="cars">
                <option value="volvo">Singapore</option>
                <option value="saab">Thailand</option>
                <option value="mercedes">Japan</option>
                <option value="audi">Myanmar</option>
              </select>
            </div>
            <div className="form--button">
              <button onClick={goSubscribe}>Subscribe</button>
            </div>
          </from>
          <p className="term">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            delectus deleniti eveniet et totam voluptate dolor perferendis
            dolore. Eligendi ad accusantium laborum soluta ut dolore voluptate
            iure mollitia facere adipisci?
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubscribeScreen;
