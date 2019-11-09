import SignIn from "../pages/SignIn";
import TopicSuggestion from "../pages/TopicSuggestion";

export const to = {
  signIn: "/sign-in",
  topicSuggestion: "/topic-suggestion"
};

export const routes = [
  {
    exact: true,
    component: SignIn,
    path: to.signIn
  },
  {
    exact: true,
    component: TopicSuggestion,
    path: to.topicSuggestion
  }
];

export default routes;
