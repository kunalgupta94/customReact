import React, { Component } from "react";
import "./title.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Random Text",
      edit: false
    };
    this.titleInput = null;
  }

  componentDidMount() {
    this.setState({
      edit: this.props.edit
    });
    const listnerHandler = e => {
      if (
        this.props.editable &&
        !e.path.includes(this.titleInput) &&
        this.state.text !== ""
      ) {
        this.setState({ edit: false });
      }
    };
    window.addEventListener("click", e => listnerHandler(e));
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
    // console.log(
    //     `offsetHeight:${this.titleInput.offsetHeight}`,
    //     `clientHeight: ${this.titleInput.clientHeight}`,
    //     `scrollHeight: ${this.titleInput.scrollHeight}`,
    //     `endHeight: ${this.titleInput.style.height}`,
    //     `minus: ${this.titleInput.scrollHeight - this.titleInput.scrollTop}`
    //   );
    let remainingHeigt =
      this.titleInput.offsetHeight - this.titleInput.clientHeight;
    this.titleInput.style.height = `${this.titleInput.scrollHeight +
      parseInt(remainingHeigt)}px`;
  }

  render() {
    const { editable, maxLength, rows, placeholder } = this.props;
    const { text, edit } = this.state;
    return editable ? (
      edit ? (
        <textarea
          onFocus={e => {
            let remainingHeigt = e.target.offsetHeight - e.target.clientHeight;
            e.target.style.height = `${e.target.scrollHeight +
              parseInt(remainingHeigt)}px`;
          }}
          ref={e => (this.titleInput = e)}
          rows={rows}
          autoFocus
          className="editableInput editEditableInputTitle"
          type="text"
          value={text}
          onChange={e => this.handleInput(e)}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      ) : (
        <span
          className="editableInput editHover"
          onDoubleClick={() => this.setState({ edit: true })}
        >
          {text}
        </span>
      )
    ) : (
      <span className="editableInput">{text}</span>
    );
  }
}

Title.defaultProps = {
  maxLength: "50",
  rows: "1",
  placeholder: "Enter some text",
  editable: false
};

export default Title;
