import React, { useState } from "react";
import LocationAndCategory from "./tabs/LocationAndCategory";
import TopicContent from "./tabs/TopicContent";
import Media from "./tabs/Media";
import Preview from "./tabs/Preview";
import Header from "../../semantics/header";
import Footer from "../../semantics/footer";
import checkMark from "../../assets/images/check-mark.png";

import "./style.scss";

class TopicSuggestion extends React.Component {
  state = {
    page: 1,

    // location and category
    categories: [],
    category: null,
    lat: "",
    lng: "",
    address: "",
    // topic content
    topicContent: {
      title: "",
      description: "",
      amount: ""
    },
    // media
    imagesToPreview: [],
    imagesToUpload: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    try {
      const response = await fetch("https://2.evollai.com/api/topic/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "*"
        }
      });
      const result = await response.json();
      if (result) {
        this.setState({
          categories: result.data
        });
      }
    } catch (error) {
      // console.log(error);
    }
  };

  topicContentFormChange = e => {
    const { topicContent } = this.state;

    topicContent[e.target.name] = e.target.value;
    this.setState({ topicContent });
  };

  moveToTopicContent = () => {
    const { page, category, address } = this.state;

    this.setState({
      submittedOne: true
    });

    if (page === 1 && category && address) {
      this.setState({
        page: 2,
        checkMarkOne: true
      });
    }

    window.scrollTo(400, 0);
  };

  moveToMedia = () => {
    const {
      page,
      topicContent: { title, description }
    } = this.state;

    this.setState({
      submittedTwo: true
    });

    if (page === 2 && title && description.length >= 500) {
      this.setState({
        page: 3,
        checkMarkOne: true,
        checkMarkTwo: true
      });
    }

    window.scrollTo(400, 0);
  };

  moveToReview = () => {
    const { page, imagesToPreview } = this.state;
    this.setState({
      submittedThree: true
    });

    if (page === 3 && imagesToPreview.length >= 1) {
      this.setState({
        page: 4,
        checkMarkOne: true,
        checkMarkTwo: true,
        checkMarkThree: true
      });
    }

    window.scrollTo(400, 0);
  };
  publishHandler = async e => {
    let { topicContent } = this.state;

    let token = localStorage.getItem("authToken");

    const formData = new FormData();
    formData.append("address", this.state.address);
    formData.append("amount", topicContent.amount);
    formData.append("description", topicContent.description);
    formData.append("title", topicContent.title);
    formData.append("categoryId", this.state.category.id);
    formData.append("lat", this.state.lat);
    formData.append("lng", this.state.lng);

    for (let i = 0; i < this.state.imagesToUpload.length; i++) {
      formData.append("file", this.state.imagesToUpload[i]);
    }
    if (token) {
      try {
        const res = await fetch("https://2.evollai.com/api/topic", {
          method: "POST",
          body: formData,
          headers: {
            "Accept-Language": "*",
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        console.log(data);

        if (data) {
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  getImages = (imagesToPreview, imagesToUpload) => {
    this.setStates({ imagesToPreview, imagesToUpload });
  };

  getAddress = (lat, lng, address) => {
    this.setState({ lat, lng, address });
  };

  onCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    const {
      checkMarkOne,
      checkMarkTwo,
      checkMarkThree,
      page,
      submittedOne,
      submittedTwo,
      submittedThree,
      submittedFour,
      address,
      categories,
      category,
      topicContent: { title, description, amount },
      imagesToPreview
    } = this.state;
    return (
      <>
        <Header />
        <div className="suggest-topic">
          <div className="tabs">
            <ul>
              <li className={checkMarkOne ? "done-tab" : "active-tab"}>
                Category and <br />
                <span>location</span>
                {checkMarkOne && <img src={checkMark} alt="check-mark" />}
              </li>
              <li className={checkMarkOne && checkMarkTwo ? "done-tab" : ""}>
                Topic content
                {checkMarkOne && checkMarkTwo && (
                  <img src={checkMark} alt="check-mark" />
                )}
              </li>
              <li
                className={
                  checkMarkOne && checkMarkTwo && checkMarkThree
                    ? "done-tab"
                    : ""
                }
              >
                Media
                {checkMarkOne && checkMarkTwo && checkMarkThree && (
                  <img src={checkMark} alt="check-mark" />
                )}
              </li>
              <li>Preview</li>
            </ul>
          </div>
          <div className="tab-content">
            {page === 1 ? (
              <LocationAndCategory
                moveNextPage={this.moveToTopicContent}
                onCategoryChange={this.onCategoryChange}
                address={address}
                categories={categories}
                submitted={submittedOne}
                category={category}
                getAddress={this.getAddress}
              />
            ) : page === 2 ? (
              <TopicContent
                onChange={this.topicContentFormChange}
                moveNextPage={this.moveToMedia}
                title={title}
                description={description}
                amount={amount}
                submitted={submittedTwo}
                typed={this.state.typed}
              />
            ) : page === 3 ? (
              <Media
                getImages={this.getImages}
                moveNextPage={this.moveToReview}
                submitted={submittedThree}
              />
            ) : page === 4 ? (
              <Preview
                images={imagesToPreview}
                publish={this.publishHandler}
                submitted={submittedFour}
              />
            ) : (
              <LocationAndCategory
                moveNextPage={this.moveToTopicContent}
                onCategoryChange={this.onCategoryChange}
                address={address}
                categories={categories}
                submitted={submittedOne}
                categoryId={categoryId}
                getAddress={this.getAddress}
              />
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default TopicSuggestion;
