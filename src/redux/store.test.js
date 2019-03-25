import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("Should handle creating courses", function() {
  //arrange
  const store = createStore(rootReducer, initialState);
  const course_one = {
    title: "Clean Code"
  };
  const course_two = {
    title: "Tu vieja"
  };
  //act
  const actions = [
    courseActions.createCourseSuccess(course_one),
    courseActions.createCourseSuccess(course_two)
  ];
  actions.map(act => store.dispatch(act));
  //assert
  expect(store.getState().courses[0]).toEqual(course_one);
  expect(store.getState().courses[1]).toEqual(course_two);
});
