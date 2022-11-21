import PropTypes from "prop-types";

export function Button({ text, name }) {
  return (
    <button onClick={function () {console.log("marijuana")}}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "User",
};
