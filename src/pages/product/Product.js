
import React, {useEffect} from 'react';
import './style.css';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Navactive from '../../components/navigation/Nav';
import couponImg from '../../assets/promo-today-st.svg';
import couponImg2 from '../../assets/promo-today-icon-nd.png';
import {connect} from 'react-redux';


const Product = (props) => {
  const token = props.token;
  const role = props.role;
  console.log(role, typeof role);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/products") {
      navigate("/products/favourite", { replace: true });
    }
  });
  return (
    <>
      <Navactive />
      <div className='row product-page flex-row-reverse flex-md-row mb-2'>
        <aside className='col-12 col-md-3 promo-section-product'>
          <p className='promo-product-title'>Promo Today</p>
          <p className='promo-product-description'>
            Coupons will be updated every weeks.
            <br /> Check them out!
          </p>
          <div className='col-9 col-md-9 btn couponCard green-couponCard'>
            <img src={couponImg} alt='promoImg' className='promo-coupon-img' />
            <p className='promo-today-title'>
              <strong>HAPPY MOTHER'S DAY!</strong> <br />
              Get one of our favorite <br /> menu for free!
            </p>
          </div>
          <div className='col-9 col-md-9 btn couponCard yellow-couponCard '>
            <img src={couponImg2} alt='promoImg' className='promo-coupon-img' />
            <div>
              <p className="promo-today-title">
                <strong>HAPPY MOTHER'S DAY!</strong> <br />
                Get one of our favorite <br /> menu for free!
              </p>
            </div>
          </div>
          <div className='col-9 col-md-9 btn couponCard green-couponCard '>
            <img src={couponImg} alt='promoImg' className='promo-coupon-img' />
            <div>
              <p className="promo-today-title">
                <strong>HAPPY MOTHER'S DAY!</strong> <br />
                Get one of our favorite <br /> menu for free!
              </p>
            </div>
          </div>
          <div className='col-9 col-md-9 btn couponCard semi-brown-couponCard '>
            <img src={couponImg} alt='promoImg' className='promo-coupon-img' />
            <div>
              <p className="promo-today-title">
                <strong>HAPPY MOTHER'S DAY!</strong> <br />
                Get one of our favorite <br /> menu for free!
              </p>
            </div>
          </div>

          <div className='col-9 col-md-9 btn btn-apply-coupon'>
            Apply Coupon
          </div>
          <div className="terms">
            <p className="li-terms-coupon-title">Terms and Conditions</p>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item li-terms-coupon">
                You can only apply 1 coupon per day
              </li>
              <li className="list-group-item li-terms-coupon">
                It only for dine in
              </li>
              <li className="list-group-item li-terms-coupon">
                Buy 1 get 1 only for new user
              </li>
              <li className="list-group-item li-terms-coupon">
                Should make member card to apply coupon
              </li>
            </ul>
          </div>
          <div className='text-left ml-1'>
            {token && role === '2' && (
              <>
                <p className='mt-2'>
                  <Link to='/editpromo' className='font-weight-bold'>
                    Edit Promo
                  </Link>
                </p>
                <p>
                  <Link to='/addpromo' className='font-weight-bold'>
                    Add New Promo
                  </Link>
                </p>
              </>
            )}
          </div>
        </aside>
        <div
          className='col-12 col-md-9 productsNavigation order-first order-md-last'
          id='activeMenu'>
          <div className='product-link-wrapper'>
            <NavLink className='products-navigation' to='/products/favourite'>
              Favourite and Promo
            </NavLink>
            <NavLink className="products-navigation" to="/products/coffee">
              Coffee
            </NavLink>
            <NavLink className="products-navigation" to="/products/noncoffee">
              Non Coffee
            </NavLink>
            <NavLink className="products-navigation" to="/products/foods">
              Foods
            </NavLink>
            <NavLink className="products-navigation" to="/products/addon">
              Add on
            </NavLink>
          </div>
          <Outlet />
          <p className='product-content-bottom-text mb-2'>
            *the price has been cutted by discount appears
          </p>
          {token && role === '2' && (
            <>
              <p className='mt-2'>
                <Link to='/product/edit' className='font-weight-bold'>
                  Edit Product
                </Link>
              </p>
              <p>
                <Link to='/product/add' className='font-weight-bold'>
                  Add New Product
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// export default Product;
const mapStateToProps = (state) => {
  return {
    role: state.auth.userData.role,
    token: state.auth.userData.token,
  };
};
export default connect(mapStateToProps)(Product);
