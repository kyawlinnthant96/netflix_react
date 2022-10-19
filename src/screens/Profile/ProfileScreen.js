import React, { useState } from "react";

// comp
import Nav from "../../components/Nav/Nav";

// style
import "./ProfileScreen.css";
import { avatar } from "../../assets/images";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../utilities/firebase";
import { plans as data } from "../../data/plans";
import { useNavigate } from "react-router-dom";
import { selectPlan } from "../../features/planSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [plans, setPlans] = useState(data);
  const currentPlan = useSelector(selectPlan);
  const navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        alert("Account logout successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const subscribeHandler = (plan) => {
    navigate("/subscribe", {
      state: plan,
    });
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="profile avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              {plans.map((plan) => (
                <div key={plan.id} className="profileScreen__plans--detail">
                  <h4>{plan.type}</h4>
                  <p>{plan.description}</p>
                  <button
                    onClick={() => subscribeHandler(plan)}
                    disabled={currentPlan?.id === plan.id && true}
                  >
                    {currentPlan?.id === plan.id ? "Subscribed" : plan.price}
                  </button>
                </div>
              ))}

              <button onClick={logoutHandler}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
