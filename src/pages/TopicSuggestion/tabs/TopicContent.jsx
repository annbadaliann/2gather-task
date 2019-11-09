import React from "react";

class TopicContent extends React.Component {
  state = {
    checked: false
  };

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const { checked } = this.state;
    const {
      onChange,
      title,
      description,
      amount,
      submitted,
      typed
    } = this.props;

    const amountStyle =
      submitted && !amount && !checked
        ? "G-invalid-input"
        : submitted && checked
        ? "opacity"
        : checked
        ? "opacity"
        : "";

    return (
      <div className="topic-content">
        <h2 className="title">Topic Content</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint
          aspernatur, voluptate adipisci ab qui laborum a veniam itaque error
          tempore sit impedit ullam veritatis? Atque nemo sequi cumque
          reiciendis.
        </p>
        <div className="tab-label">
          <label>
            <span>Title</span>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={title}
              className={submitted && !title ? "G-invalid-input" : ""}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="tab-label">
          <label>
            <div className="description-label">
              <span>Description</span>
              <span>min 500 symbols</span>
            </div>

            <textarea
              placeholder="Topic description"
              className={
                submitted && (!description || description.length < 500)
                  ? "G-invalid-input"
                  : ""
              }
              name="description"
              value={description}
              onChange={onChange}
            ></textarea>
          </label>
        </div>
        <div className="tab-label">
          <label>
            <span>Rough project budget</span>
            <input
              type="number"
              minLength="0"
              placeholder="Write amount"
              name="amount"
              value={checked ? "" : amount}
              disabled={checked ? true : false}
              className={amountStyle}
              onChange={onChange}
              onKeyDown={() => event.keyCode == 69 && event.preventDefault()}
            />
          </label>
          <div className="check">
            <label className="checkbox">
              <input
                type="checkbox"
                onChange={this.handleCheck}
                checked={checked}
                disabled={typed ? true : false}
              />
              <span className="checkmark"></span>
              <span className="text">
                I am not sure how much amount is required
              </span>
            </label>
          </div>
        </div>

        <button className="G-button" onClick={this.props.moveNextPage}>
          Continue
        </button>
      </div>
    );
  }
}

export default TopicContent;
