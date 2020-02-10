import React from "react";
import { mount } from "enzyme";
import withHoverState from "./withHoverState";

describe("withHoverState", () => {

  it("should allow a wrapped component to initialise with an initial state we dictate", () => {
    const Comp = ({ state }) => <div>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "", mouseOut: "" })(Comp);
    const wrapper = mount(<EnhancedComp state={"24523"} />);
    expect(wrapper.text()).toBe("24523");
  });

  it("should update a wrapped component's state correctly on hover", () => {
    const Comp = ({ state, onMouseOver }) => <div onMouseOver={onMouseOver}>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "nights", mouseOut: "previous" })(Comp);
    const wrapper = mount(<EnhancedComp state={"days"} />);
    expect(wrapper.text()).toBe("days");
    wrapper.find("div").simulate("mouseover");
    expect(wrapper.text()).toBe("nights");
  });

  it("should update a wrapped component's state correctly on mouse out to previous state", () => {
    const Comp = ({ state, onMouseOver, onMouseOut }) => <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "nights", mouseOut: "previous" })(Comp);
    const wrapper = mount(<EnhancedComp state={"days"} />);
    expect(wrapper.text()).toBe("days");
    wrapper.find("div").simulate("mouseover");
    expect(wrapper.text()).toBe("nights");
    wrapper.find("div").simulate("mouseout");
    expect(wrapper.text()).toBe("days");
  });

  it("should update a wrapped component's state correctly on mouse out to a configured state", () => {
    const Comp = ({ state, onMouseOver, onMouseOut }) => <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "evening", mouseOut: "morning" })(Comp);
    const wrapper = mount(<EnhancedComp state={"afternoon"} />);
    expect(wrapper.text()).toBe("afternoon");
    wrapper.find("div").simulate("mouseover");
    expect(wrapper.text()).toBe("evening");
    wrapper.find("div").simulate("mouseout");
    expect(wrapper.text()).toBe("morning");
  });

  it("should invoke a parent's onMouseOver handler on a child's mouse over event", () => {
    const Comp = ({ state, onMouseOver, onMouseOut }) => <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "anAmazingState", mouseOut: "previous" })(Comp);
    const mouseOver = jest.fn();
    const wrapper = mount(<EnhancedComp onMouseOver={mouseOver} state={"aBadState"} />);
    wrapper.find("div").simulate("mouseover");
    expect(mouseOver).toHaveBeenCalledWith("anAmazingState");
  });

  it("should invoke a parent's onMouseOut handler on a child's mouse out event", () => {
    const Comp = ({ state, onMouseOver, onMouseOut }) => <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "anAmazingState", mouseOut: "previous" })(Comp);
    const mouseOver = jest.fn();
    const mouseOut = jest.fn();
    const wrapper = mount(<EnhancedComp onMouseOver={mouseOver} onMouseOut={mouseOut} state={"aBadState"} />);
    wrapper.find("div").simulate("mouseover");
    expect(mouseOver).toHaveBeenCalledWith("anAmazingState");
    wrapper.find("div").simulate("mouseout");
    expect(mouseOut).toHaveBeenCalledWith("aBadState");
  });

  it("should not change state and invoke parent's mouse over when a throttle is in place and " +
  "the last change was within the throttle buffer but should change after the throttle has ended", (done) => {
    const Comp = ({ state, onMouseOver, onMouseOut }) => <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{state}</div>;
    const EnhancedComp = withHoverState({ mouseOver: "anAmazingState", mouseOut: "previous" })(Comp);
    const mouseOver = jest.fn();
    const mouseOut = jest.fn();
    const lastChanged = (new Date).getTime() - 200;
    const wrapper = mount(<EnhancedComp onMouseOver={mouseOver} onMouseOut={mouseOut} 
      lastChanged={lastChanged} throttleMilliseconds={1000} state={"aBadState"} />);
    wrapper.find("div").simulate("mouseover");
    expect(mouseOver).toBeCalledTimes(0);
    setTimeout(() => {
      expect(mouseOver).toHaveBeenCalledWith("anAmazingState");
      done();
    }, 2000);
  });
});