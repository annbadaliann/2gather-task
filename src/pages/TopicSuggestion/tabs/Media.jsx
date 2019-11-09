import React from "react";
import deleteIcon from "../../../assets/images/delete.png";
import addIcon from "../../../assets/images/add.png";

class Media extends React.Component {
  state = {
    imagesToPreview: [],
    imagesToUpload: []
  };

  selectFileHandler = e => {
    this.state.imagesToPreview.push({
      url: URL.createObjectURL(e.target.files[0])
    });

    this.state.imagesToUpload.push(e.target.files[0]);

    this.setState({
      imagesToPreview: this.state.imagesToPreview,
      imagesToUpload: this.state.imagesToUpload
    });
    this.props.getImages(this.state.imagesToPreview, this.state.imagesToUpload);
  };

  deleteImage = index => {
    this.state.imagesToPreview.splice(index, 1);

    this.setState({
      imagesToPreview: this.state.imagesToPreview
    });

    this.props.getImages(this.state.imagesToPreview);
  };

  render() {
    const { submitted } = this.props;
    return (
      <div className="media">
        <h2 className="title">Media</h2>
        <p className="paragraph">
          Choose images for the overview section of your topic.
        </p>
        <div className="gallery-list">
          <div
            className={`gallery upload ${
              submitted && this.state.imagesToPreview.length === 0
                ? "G-invalid-input"
                : ""
            }`}
          >
            <label htmlFor="file-upload">
              <input
                type="file"
                onChange={this.selectFileHandler}
                id="file-upload"
                style={{ display: "none" }}
                accept="image/png, image/jpeg"
              />

              <img src={addIcon} alt="add" onClick={this.uploadFileHandler} />
            </label>
          </div>

          {this.state.imagesToPreview.map((item, index) => {
            return (
              <div
                key={index}
                className="gallery"
                style={{
                  background: `url(${
                    item ? item.url : null
                  }) center/cover no-repeat`
                }}
              >
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="delete-img"
                  onClick={() => this.deleteImage(index)}
                />
              </div>
            );
          })}
        </div>

        <button className="G-button" onClick={this.props.moveNextPage}>
          Continue
        </button>
      </div>
    );
  }
}

export default Media;
//save
