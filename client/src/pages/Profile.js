import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { Container } from "@mui/system";
import ProductForm from "../components/ProductForm";


const Profile = (props) => {


  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return (
    <Container maxWidth="xl">
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {userParam ? `${user.username}'s` : 'your'} profile.
          </h2>
        </div>
        <div className="mb-3">{!userParam && <ProductForm />}</div>
        <div className="justify-space-between mb-3">
          <div className="col-12 mb-3 col-lg-8">
            <ProductList
              products={user.products}
              title={`All Products posted by ${user.username}`}
            />
          </div>
        </div>
      </div>
    </Container >
  );
};

export default Profile;
