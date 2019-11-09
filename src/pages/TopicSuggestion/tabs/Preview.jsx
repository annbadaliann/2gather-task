import React from "react";
import Modal from "../../../components/modal";
import PublishModal from "./components/PublishModal";
import user from "../../../assets/images/user.png";
import SimpleSlider from "./components/Slider";

class Preview extends React.Component {
  state = {
    publishModal: false,
    sliderIndex: null
  };

  openModal = () => {
    this.setState({
      publishModal: true
    });

    this.props.publish();
  };

  openSlider = index => () => {
    this.setState({
      sliderIndex: index
    });
  };

  closeSlider = () => {
    this.setState({
      sliderIndex: null
    });
  };

 
  render() {
    const { publishModal, sliderIndex } = this.state;
    const { images } = this.props;

    return (
      <div className="preview">
        <h2 className="title">Preview</h2>
        {images && (
          <div className="galleries">
            <div
              className="gallery one"
              style={{
                background: `url(${images[0].url}) center/cover no-repeat`
              }}
              onClick={this.openSlider(0)}
            />
            <div className="gallery-right">
              {images.length === 2 && (
                <div
                  className={`gallery two ${images.length === 2 ? "big" : ""}`}
                  style={{
                    background: `url(${images[1].url}) center/cover no-repeat`
                  }}
                  onClick={this.openSlider(1)}
                />
              )}
              {images.length === 3 && (
                <>
                  <div
                    className={`gallery two ${
                      images.length === 2 ? "big" : ""
                    }`}
                    style={{
                      background: `url(${images[1].url}) center/cover no-repeat`
                    }}
                    onClick={this.openSlider(1)}
                  />
                  <div
                    className={`gallery three ${
                      images.length > 3 ? "show-more" : ""
                    }`}
                    style={{
                      background: `url(${images[2].url}) center/cover no-repeat`
                    }}
                    onClick={this.openSlider(2)}
                  />
                </>
              )}
              {images.length > 3 && (
                <>
                  <div
                    className={`gallery two ${
                      images.length === 2 ? "big" : ""
                    }`}
                    style={{
                      background: `url(${images[1].url}) center/cover no-repeat`
                    }}
                    onClick={this.openSlider(1)}
                  />
                  <div
                    className={`gallery three ${
                      images.length > 3 ? "show-more" : ""
                    }`}
                    style={{
                      backgroundImage: `url(${images[2].url}) center/cover no-repeat`
                    }}
                    onClick={this.openSlider(0)}
                  />
                </>
              )}
            </div>
          </div>
        )}
        <Modal isOpen={sliderIndex !== null} close={this.closeSlider}>
          <div className="slider-pics">
            <SimpleSlider images={images} sliderIndex={sliderIndex} />
          </div>
        </Modal>

        <div className="user">
          <img src={user} alt="user" />
          <span>Anna Smith</span>
        </div>
        <div className="gallery"></div>
        <h2 className="title">
          Lets help Abovyan secondary school and start main building
          reconstraction
        </h2>
        <p className="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </p>
        <button className="G-button publish-btn" onClick={this.openModal}>
          Publish
        </button>
        <Modal
          isOpen={publishModal}
          close={this.openModal}
          className="publish-modal"
        >
          <PublishModal />
        </Modal>
      </div>
    );
  }
}

export default Preview;
