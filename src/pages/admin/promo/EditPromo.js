import React from "react";
import "../style.css";
import defaultImg from "../../../assets/cold-brew-hd.png";
import Navactive from "../../../components/navigation/Nav";

const Editpromo = () => {
  return (
    <>
      <Navactive />
      <div className="Add-product-wrapper">
        <div className="row d-flex justify-content-between mx-5 mt-2">
        <div aria-label="col breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="breadcrumb-page" href="#">
                Favorite & Promo
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="active-page" href="#">
                Add new promo
              </a>
            </li>
          </ol>
        </div>
          <button className="col-1 btn btn-cancel-edit-promo">cancel</button>
        </div>

        <div className="row add-product-content">
          <aside className="col col-md-4">
            <div className="card-coupon-edit align-item-center align-content-center">
              <div>
                <img
                  src={defaultImg}
                  className="cuopon-edit-img"
                  alt="product img promo"
                />
                <button className="change-promo-img-btn">
                  <i class="bi bi-pencil"></i>
                </button>
              </div>
              <p className="coupon-edit-card-title">Beef Spaghetti</p>
              <p className="coupon-edit-card-desc-title">20% OFF</p>
              <p className="coupon-edit-card-desc-product">
                Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
              </p>
              <hr className="dashed" />
              <p className="coupon-edit-card-desc-product">coupon code</p>
              <p className="coupon-edit-card-desc-title">coupon c123</p>
              <p className="coupon-edit-card-regulation">
                Valid untill October 10th 2020
              </p>
            </div>

            <div className="form-wrapper">
              <p className="add-product-title aside-title-input">
                Expired Date :
              </p>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle start-hour-btn-coupon"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select start date
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn start-hour-btn-coupon dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select end date
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="add-product-title aside-title-input">
                Input Coupon Code:
              </p>
              <div className="dropdown">
                <button
                  className="btn start-hour-btn-coupon dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Input Coupon Code
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="col col-md-6">
            <form>
              <div className="form-group">
                <label className="add-product-title">Name :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput"
                  placeholder="Type promo name min. 50 characters"
                />
              </div>
              <div className="form-group">
                <label className="add-product-title">Normal Price :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput2"
                  placeholder="Type the normal price"
                />
              </div>
              <div className="form-group">
                <label className="add-product-title">Description :</label>
                <input
                  type="text"
                  className="form-control add-product-input"
                  id="formGroupExampleInput2"
                  placeholder="Describe your promo min. 150 characters"
                />
              </div>
              <div className="form-group">
                <p className="add-product-title">Input product size :</p>
                <p className="form-desc">
                  Click size you want to use for this product
                </p>
                <div>
                  <button className="btn btn-radio btn-yellow-color">R</button>
                  <button className="btn btn-radio btn-yellow-color">X</button>
                  <button className="btn btn-radio btn-yellow-color">XL</button>
                  <button className="btn btn-radio-load">
                    200
                    <br />
                    gr
                  </button>
                  <button className="btn btn-radio-load">
                    300
                    <br />
                    gr
                  </button>
                  <button className="btn btn-radio-load">
                    500
                    <br />
                    gr
                  </button>
                </div>
              </div>
              <div className="form-group">
                <p className="add-product-title">Input delivery methods :</p>
                <p className="form-desc">
                  Click methods you want to use for this product
                </p>
                <div className="row w-100 h-25 mx-0">
                  <button className="col mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                    Home Delivery
                  </button>
                  <button className="col mx-1 btn-add-byGallery border-0 btn-width-form-input-add btn-yellow-color">
                    Dine in
                  </button>
                  <button className="col mx-1 btn-take-away border-0 btn-width-form-input-add">
                    Take away
                  </button>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <p className="add-product-title aside-title-input">
                    Enter the Discount:
                  </p>
                  <div className="dropdown">
                    <button
                      className="btn start-hour-btn-coupon-discount dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Input discount
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <button className="col col-md-auto btn btn-block btn-add-byGallery btn-brown-color font-white-color">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editpromo;
