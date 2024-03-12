import React from "react";
import "./style.css";
import {
  Logo,
  Banner,
  Cart,
  Img_2,
  Img_3,
  Ing_1,
  Next,
  Off,
  Prev,
  Product_1,
  Product_2,
  Product_3,
  Product_4,
  Product_5,
  Product_6,
  Star,
  To_bottom,
  User,
  Avatar_1,
} from "../../asset/index.js";

export const homePage = () => {
  return (
    <div>
      <div id="wrapper">
        {/* ---------------------------------------Header------------------------------------------- */}
        <div id="header">
          <a href="" class="logo">
            <img src={Logo} alt="" />
          </a>
          <div id="menu">
            <div class="item">
              <a href="">Trang chủ</a>
            </div>
            <div class="item">
              <a href="">Sản phẩm</a>
            </div>
            <div class="item">
              <a href="">Blog</a>
            </div>
            <div class="item">
              <a href="">Liên hệ</a>
            </div>
          </div>
          <div id="actions">
            <div class="item">
              <img src={User} alt="" />
            </div>
            <div class="item">
              <img src={Cart} alt="" />
            </div>
          </div>
        </div>
        {/* -----------------------------------------------BANNER------------------------------------------------- */}
        <div id="banner">
          <div class="box-left">
            <h2>
              <span>IN ẤN</span>
              <br />
              <span>MAY MẶC</span>
            </h2>
            <p>
              Chuyên cung cấp các món ăn đảm bảo dinh dưỡng hợp vệ sinh đến
              người dùng,phục vụ người dùng 1 cái hoàn hảo nhất
            </p>
            <button>TÌM HIỂU THÊM</button>
          </div>
          <div class="box-right">
            <img src={Ing_1} alt="" />
            <img src={Img_2} alt="" />
            <img src={Img_3} alt="" />
          </div>
          <div class="to-bottom">
            <a href="">
              <img src={To_bottom} alt="" />
            </a>
          </div>
        </div>
        {/* -----------------------------------------PRODUCT--------------------------------------- */}
        <div id="wp-products">
          <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
          <ul id="list-products">
            <div class="item">
              <img src={Product_1} alt="" />
              <div class="stars">
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
              </div>

              <div class="name">Món Ăn 1</div>
              <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
              <div class="price">500.000 VNĐ</div>
            </div>

            <div class="item">
              <img src={Product_2} alt="" />
              <div class="stars">
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
              </div>

              <div class="name">Món Ăn 1</div>
              <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
              <div class="price">500.000 VNĐ</div>
            </div>

            <div class="item">
              <img src={Product_3} alt="" />
              <div class="stars">
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
              </div>

              <div class="name">Món Ăn 1</div>
              <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
              <div class="price">500.000 VNĐ</div>
            </div>
            <div class="item">
              <img src={Product_4} alt="" />
              <div class="stars">
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
              </div>

              <div class="name">Món Ăn 1</div>
              <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
              <div class="price">500.000 VNĐ</div>
            </div>

            <div class="item">
              <img src={Product_5} alt="" />
              <div class="stars">
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
              </div>

              <div class="name">Món Ăn 1</div>
              <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
              <div class="price">500.000 VNĐ</div>
            </div>

            <div class="item">
              <img src={Product_6} alt="" />
              <div class="stars">
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
                <span>
                  <img src={Star} alt="" />
                </span>
              </div>

              <div class="name">Món Ăn 1</div>
              <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
              <div class="price">500.000 VNĐ</div>
            </div>
          </ul>
          {/* ---------------------------------------------------LIST PAGE------------------------------------------ */}
          <div class="list-page">
            <div class="item">
              <a href="">1</a>
            </div>
            <div class="item">
              <a href="">2</a>
            </div>
            <div class="item">
              <a href="">3</a>
            </div>
            <div class="item">
              <a href="">4</a>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------COMMENT---------------------------------------------- */}
        <div id="comment">
          <h2>NHẬN XÉT CỦA KHÁCH HÀNG</h2>
          <div id="comment-body">
            <div class="prev">
              <a href="#">
                <img src={Prev} alt="" />
              </a>
            </div>
            <ul id="list-comment">
              <li class="item">
                <div class="avatar">
                  <img src={Avatar_1} alt="" />
                </div>
                <div class="stars">
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                </div>
                <div class="name">Nguyễn Đình Vũ</div>

                <div class="text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </li>
              <li class="item">
                <div class="avatar">
                  <img src={Avatar_1} alt="" />
                </div>
                <div class="stars">
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                </div>
                <div class="name">Trần Ngọc Sơn</div>

                <div class="text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </li>
              <li class="item">
                <div class="avatar">
                  <img src={Avatar_1} alt="" />
                </div>
                <div class="stars">
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>
                    <img src={Star} alt="" />
                  </span>
                  <span>{Star}</span>
                </div>
                <div class="name">Nguyễn Trần Vi</div>

                <div class="text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </li>
            </ul>
            <div class="next">
              <a href="#">
                <img src={Next} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------FOOTER------------------------------------------------------ */}
        <div id="footer">
          <div class="box">
            <div class="logo">
              <img src={Logo} alt="" />
            </div>
            <p>Cung cấp sản phẩm với chất lượng an toàn cho quý khách</p>
          </div>
          <div class="box">
            <h3>NỘI DUNG</h3>
            <ul class="quick-menu">
              <div class="item">
                <a href="">Trang chủ</a>
              </div>
              <div class="item">
                <a href="">Sản phẩm</a>
              </div>
              <div class="item">
                <a href="">Blog</a>
              </div>
              <div class="item">
                <a href="">Liên hệ</a>
              </div>
            </ul>
          </div>
          <div class="box">
            <h3>LIÊN HỆ</h3>
            <form action="">
              <input type="text" placeholder="Địa chỉ email" />
              <button>Nhận tin</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
