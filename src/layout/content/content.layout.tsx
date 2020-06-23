import React from "react";
import { Switch, Route } from "react-router";
import Randomizer from "@components/Randomizer/Randomizer";
import styled from "styled-components";
import { connect } from "react-redux";
import ProtectedRoute from "@HOC/protected-route/protected-route.hoc";
import HomePage from "@pages/home-page/home.page";
import ProfilePage from "@pages/profile-page/profile-page";
import Auth from "@components/Auth/auth.component";

<<<<<<< HEAD
import Todo from "@components/Todo";
import Join from "@components/Chat/Join";
=======
import Todo from "../../components/Todo/Todo";
import Shedule from '../../components/Shedule/Shedule'
>>>>>>> ed8c4aa... env fullCalendar

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const ContentWrapper = (props: { id: string }) => {
  return (
    <StyledContentWrapper>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tools" exact component={HomePage} />
        <ProtectedRoute path="/profile" redirect="/" isAuth={!!props.id}>
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/tools/shedule" component={Shedule} />
        <Route path="/tools/random" component={Randomizer} />
        <Route path="/tools/todo" component={Todo} />
        <Route path="/tools/chat" component={Join} />
        <ProtectedRoute path="/auth" redirect="/" isAuth={!props.id}>
          <Auth />
        </ProtectedRoute>
      </Switch>
    </StyledContentWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  id: state.authReducer.uid,
});

export default connect(mapStateToProps)(ContentWrapper);
