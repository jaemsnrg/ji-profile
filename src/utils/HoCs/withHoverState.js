import React from "react";
import PropTypes from "prop-types";
import { getDisplayName } from "utils/helpers";

/**
 * Provides a higher-order component
 * that provides hover states that are intended
 * to work in isolation from a component's actual state
 * when the user hovers over the component.
 *
 * The config object takes the following shape:
 * {
 *   mouseOver: SomeStateConstant,
 *   mouseOut: "previous"|SomeStateConstant,
 *   stateName: "selected"
 * }
 *
 * The string "previous" sets the state back to whatever
 * it was before the mouse hovered over the component.
 *
 * The stateName property provides an alternative name
 * for the state value that gets passed down.
 *
 * @param {object} config The configuration providing
 *                        the states for mouseOver and mouseOut.
 */
const withHoverState = config => Wrapped => {
  class WithHoverState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentState: null,
        previousState: null,
        lastEvent: "none",
        mouseOver: false
      };
      this.onMouseOver = this.onMouseOver.bind(this);
      this.updateStateFromMouseOver = this.updateStateFromMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidMount() {
      this.setState({ currentState: this.props.state });
    }

    componentDidUpdate() {
      // On mouse out events, only if mouseOut should reset to the previous
      // state do we need to synchronise the state with props.
      if (config.mouseOut === "previous") {
        const stateName = config.stateName || "state";
        if (
          this.props[stateName] !== this.state.currentState &&
          !this.state.mouseOver
        ) {
          this.setState({ currentState: this.props[stateName] });
        }
      }
    }

    updateStateFromMouseOver() {
      this.setState(prevState => ({
        mouseOver: true,
        lastEvent: "mouseOver",
        previousState: prevState.currentState,
        currentState: config.mouseOver
      }));
      if (this.props.onMouseOver) {
        this.props.onMouseOver(config.mouseOver);
      }
    }

    onMouseOver() {
      if (
        this.props.throttleMilliseconds &&
        this.props.lastChanged
      ) {
        const now = new Date().getTime();
        const diff = now - this.props.lastChanged;
        if (diff > this.props.throttleMilliseconds) {
          this.updateStateFromMouseOver();
        } else {
          this.setState({ lastEvent: "mouseOver" });
          setTimeout(() => {
            // Set to new state by way of mouse over event
            // if the user hasn't left the element in question.
            if (this.state.lastEvent !== "mouseOut") {
              this.onMouseOver();
            }
          }, diff);
        }
      } else {
        this.updateStateFromMouseOver();
      }
    }

    onMouseMove() {
      if (!this.state.mouseOver) {
        this.onMouseOver();
      }
    }

    onMouseOut() {
      if (config.mouseOut === "previous") {
        this.setState(prevState => ({
          mouseOver: false,
          lastEvent: "mouseOut",
          currentState: prevState.previousState,
          previousState: null
        }));
        if (this.props.onMouseOut) {
          this.props.onMouseOut(this.state.previousState);
        }
      } else {
        this.setState({
          mouseOver: false,
          lastEvent: "mouseOut",
          currentState: config.mouseOut,
          previousState: null
        });
        if (this.props.onMouseOut) {
          this.props.onMouseOut(config.mouseOut);
        }
      }
    }

    render() {
      const stateName = config.stateName || "state";
      const { [stateName]: passedDownState, ...rest } = this.props;
      const state = {
        [stateName]: this.state.currentState
      };
      return (
        <Wrapped
          {...rest}
          onMouseOver={this.onMouseOver}
          onMouseMove={this.onMouseMove}
          onMouseOut={this.onMouseOut}
          {...state}
        />
      );
    }
  }

  WithHoverState.propTypes = {
    state: PropTypes.any,
    throttleMilliseconds: PropTypes.number,
    lastChanged: PropTypes.number
  };

  // Set display name to make debugging nice and easy.
  WithHoverState.displayName = `WithHoverState(${getDisplayName(Wrapped)})`;

  return WithHoverState;
};

export default withHoverState;
