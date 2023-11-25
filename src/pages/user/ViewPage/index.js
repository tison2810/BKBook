import {memo,useState} from 'react'
import './style.scss';
import{ROUTERS} from "utils/routers";
import {Link} from "react-router-dom";
import {LiaStarSolid} from "react-icons/lia"
import {BsArrowRightCircle} from "react-icons/bs"
import {IoIosSearch} from "react-icons/io";
import {PiStar} from "react-icons/pi";
import {CiShoppingBasket} from "react-icons/ci"
import {PiCreditCardLight} from "react-icons/pi";
const ViewPage = () => {
  const [menus,setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Danh mục",
      path: ROUTERS.USER.MENU,
    },
    {
      name: "Tài khoản",
      path: "",
    },
  ])
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#f5f2f2",
        border: "1px solid #000",
        boxSizing: "border-box",
        width: "100%",
        height: "1024px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "20px",
        color: "#000",
        fontFamily: "'Noticia Text'",

      }}
    >
      <div
        style={{
          position: "absolute",
          top: "133px",
          left: "0px",
          width: "1435px",
          height: "401px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "20px",
            width: "288px",
            height: "400px",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-18@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "1px",
            left: "296px",
            width: "348px",
            height: "400px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "20px",
              backgroundColor: "#f4f6fd",
              border: "1px solid #0039ff",
              boxSizing: "border-box",
              width: "348px",
              height: "400px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1px",
              left: "3px",
              letterSpacing: "-0.01em",
              whiteSpace: "pre-wrap",
              fontSize: "25px",
            }}
          >
            {/* <p style={{ marginBlockStart: "", marginBlockEnd: "2px" }}> */}
            <p style ={{margin: "0.01px 0"}}>
              HIỆP KHÁCH HÀNH (TRỌN BỘ)
            </p>
            <p
              style={{
                fontSize: "20px",
                margin: "0.01px 0"
              }}
            >{`Tác giả: `}
                  <span style={{ color: "#052cf9" }}>Kim Dung</span>
            </p>
            <p  style={{
                fontSize: "20px",
                margin: "0.01px 0"
              }}>
              <span>
                <span>
                  <span>Đơn giá: 120000<sup>vnd</sup></span>
                </span>
              </span>
            </p>
            <p  style={{
                fontSize: "22px",
                marginTop: "25px ",
                marginBottom: "0.01px"
              }}>
              <span>
                <span>
                  <b>Thông tin chi tiết:</b>
                </span>
              </span>
            </p>
            <p style={{fontSize: "20px",margin: "0.01px 0" }}>
              <span>
                <span style={{ color: "rgba(0, 0, 0, 0.65)",fontSize: "20 px",
                margin: "0.01px 0" }}>
                  Loại bìa
                </span>
                <span>               Bìa mềm</span>
              </span>
            </p>
            <p style={{fontSize: "20px",marginTop:"0.01px",marginBottom:"0.01px" }}>
              <span>
                <span style={{ color: "rgba(0, 0, 0, 0.65)",fontSize: "20 px",
                margin: "0.01px 0" }}>
                  Nhà xuất bản
                </span>
                <span>     NXB Văn học</span>
              </span>
            </p>
            <p style={{fontSize: "20px",marginTop:"0.01px",marginBottom: "0.01px" }}>
              <span>
                <span style={{ color: "rgba(0, 0, 0, 0.65)",fontSize: "20 px",
                margin: "0.01px 0" }}>
                  Hỗ trợ ebook
                </span>
                <span>       Không</span>
              </span>
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              top: "250px",
              left: "4px",
              width: "335px",
              height: "138px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "21px",
                left: "3px",
                width: "136px",
                height: "50px",
                fontSize: "32px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "42px",
                  width: "50px",
                  height: "30px",
                  fontSize: "20px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    boxSizing: "border-box",
                    width: "50px",
                    height: "30px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "21px",
                    letterSpacing: "-0.01em",
                    display: "inline-block",
                    width: "8px",
                  }}
                >
                  1
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "104px",
                  width: "30px",
                  height: "44px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "0px",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    boxSizing: "border-box",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "7px",
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    width: "17px",
                    height: "44px",
                    textShadow:
                      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  +
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "30px",
                  height: "44px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "0px",
                    backgroundColor: "#fffbfb",
                    border: "1px solid #000",
                    boxSizing: "border-box",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "9px",
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    width: "17px",
                    height: "44px",
                    textShadow:
                      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  -
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "102px",
                left: "0px",
                width: "165px",
                height: "36px",
                color: "#fff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  borderRadius: "60px",
                  backgroundColor: "#fe0000",
                  border: "1px solid #fe0000",
                  boxSizing: "border-box",
                  width: "165px",
                  height: "36px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "37px",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  width: "92px",
                }}
              >
                Mua ngay
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "101px",
                left: "170px",
                width: "165px",
                height: "36px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  borderRadius: "60px",
                  backgroundColor: "#fff",
                  border: "1px solid #4a7dff",
                  boxSizing: "border-box",
                  width: "165px",
                  height: "36px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "21px",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  width: "123px",
                }}
              >
                Thêm vào giỏ
              </div>
            </div>
            <b
              style={{
                position: "absolute",
                top: "0px",
                left: "3px",
                letterSpacing: "-0.01em",
              }}
            >
              Số lượng
            </b>
            <div
              style={{
                position: "absolute",
                top: "65px",
                left: "-1px",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "184px",
                fontSize:"18.5px"
              }}
            >
              Tạm tính:120.000<sup>vnd</sup>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "42px",
              left: "195px",
              width: "138px",
              height: "31px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "2px",
                left: "9px",
                borderRadius: "60px",
                backgroundColor: "#fff",
                border: "1px solid #4a7dff",
                boxSizing: "border-box",
                width: "129px",
                height: "31px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "38px",
                letterSpacing: "-0.01em",
                display: "flex",
                alignItems: "center",
                width: "72px",
              }}
            >
              Đọc thử
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "7.5%",
              width: "8.62%",
              top: "22.25%",
              right: "19.83%",
              bottom: "70.25%",
              left: "71.55%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/vector.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1px",
            left: "651px",
            width: "312px",
            height: "400px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "20px",
              backgroundColor: "#f4f6fd",
              border: "1px solid #4a7dff",
              boxSizing: "border-box",
              width: "312px",
              height: "400px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "6px",
              left: "7px",
              letterSpacing: "-0.01em",
              whiteSpace: "pre-wrap",
              display: "inline-block",
              width: "300px",
              height: "329px",
            }}
          >
            <p style={{margin:"0.01px 0" }}>
              <b>Mô tả sản phẩm</b>
            </p>
            <p style={{margin:"0.01px 0"   }}>
              <b>{`  Hiệp Khách Hành `}</b>
              <span>
                là một trong những tiểu thuyết võ hiệp của Kim Dung, được phát
                hành trên Minh báo năm 1965.
              </span>
            </p>
            <p
              style={{margin:"0.01px 0" }}
            >{`  Bộ truyện xoay quanh các cuộc phiêu lưu của Thạch Phá Thiên. Đây là câu chuyện hoàn toàn không có liên hệ với lịch sử, tuy nhiên đoán được bối cảnh bộ truyện là sau thời Nguyên - Minh. `}</p>
          </div>
          <div
            style={{
              position: "absolute",
              top: "354px",
              left: "107px",
              letterSpacing: "-0.01em",
              color: "#1439fa",
              display: "inline-block",
              width: "97px",
            }}
          >
            Xem thêm
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "1px",
            left: "968px",
            width: "467px",
            height: "400px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "20px",
              backgroundColor: "#f4f6fd",
              border: "1px solid #4a7dff",
              boxSizing: "border-box",
              width: "467px",
              height: "400px",

            }}
          />
          <div
            style={{
              position: "absolute",
              top: "68px",
              left: "12px",
              width: "105px",
              height: "193px",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "1px",
                left: "39px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "37px",
                left: "4px",
                width: "15px",
                height: "15px",
                overflow: "hidden",

              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <div>
            <img
              style={{
                position: "absolute",
                top: "64px",
                left: "4px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "64px",
                left: "19px",
                width: "15px",
                height: "15px",
                overflow: "hidden",

              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "64px",
                left: "34px",
                width: "15px",
                height: "15px",
                overflow: "hidden",

              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />

            <img
              style={{
                position: "absolute",
                top: "64px",
                left: "49px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            </div>
            <img
              style={{
                position: "absolute",
                top: "91px",
                left: "5px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "91px",
                left: "20px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "91px",
                left: "35px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "118px",
                left: "19px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "118px",
                left: "4px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "145px",
                left: "4px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "37px",
                left: "19px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "37px",
                left: "34px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "37px",
                left: "49px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "37px",
                left: "64px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"

            />
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              4.5
            </div>
            <div
              style={{
                position: "absolute",
                top: "31px",
                left: "0px",
                letterSpacing: "-0.01em",
                whiteSpace: "pre-wrap",
              }}
            >
            </div>
          </div>
          <b
            style={{
              position: "absolute",
              top: "6px",
              left: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            Đánh giá
          </b>
          <div
            style={{
              position: "absolute",
              top: "4px",
              left: "119px",
              width: "331px",
              height: "80px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                backgroundColor: "#f4f6fd",
                borderBottom: "1px solid #000",
                boxSizing: "border-box",
                width: "331px",
                height: "80px",
              }}
            />
            <img
              style={{
                position: "absolute",
                top: "6px",
                left: "166px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <b
              style={{
                position: "absolute",
                top: "0px",
                left: "1px",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "133px",
              }}
            >
              Nguyễn Văn A
            </b>
            <div
              style={{
                position: "absolute",
                top: "37px",
                left: "0px",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "124px",
              }}
            >
              Nội dung hay
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "156px",
                letterSpacing: "-0.01em",
              }}
            >
              5
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "193px",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "138px",
                height: "27px",
              }}
            >
              15:29, 15/8/23
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "84px",
              left: "119px",
              width: "331px",
              height: "80px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                backgroundColor: "#f4f6fd",
                borderBottom: "1px solid #000",
                boxSizing: "border-box",
                width: "331px",
                height: "80px",
              }}
            />
            <img
              style={{
                position: "absolute",
                top: "6px",
                left: "166px",
                width: "15px",
                height: "15px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom1.svg"
            />
            <b
              style={{
                position: "absolute",
                top: "0px",
                left: "1px",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "133px",
              }}
            >
              Quách Thị B
            </b>
            <div
              style={{
                position: "absolute",
                top: "37px",
                left: "0px",
                letterSpacing: "-0.01em",
              }}
            >
              Sách hay nhưng bìa hơi bẩn
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "156px",
                letterSpacing: "-0.01em",
              }}
            >
              4
            </div>
            <div
              style={{
                position: "absolute",
                top: "-2px",
                left: "193px",
                letterSpacing: "-0.01em",
                display: "inline-block",
                width: "138px",
                height: "27px",
              }}
            >
              22:34, 17/9/23
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "844px",
          left: "0px",
          width: "1440px",
          height: "180px",
          fontSize: "32px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#fff",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "1440px",
            height: "200px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "539px",
            width: "362px",
            height: "120px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "-0.01em",
            }}
          >
            Phương thức thanh toán
          </div>
          <img
            style={{
              position: "absolute",
              top: "70px",
              left: "16px",
              width: "326px",
              height: "50px",
            }}
            alt=""
            src="/pttt.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "81px",
            width: "246px",
            height: "121px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "4px",
              letterSpacing: "-0.01em",
            }}
          >
            Về chúng tôi
          </div>
          <div
            style={{
              position: "absolute",
              top: "62px",
              left: "0px",
              fontSize: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            <p style={{ marginBlockStart: "", marginBlockEnd: "5px" }}>
              Giới thiệu về BKBOOK
            </p>
            <p style={{ margin: "" }}>Các sản phẩm của BKBOOK</p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "1127px",
            width: "283px",
            height: "115px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              letterSpacing: "-0.01em",
            }}
          >{`Liên hệ `}</div>
          <div
            style={{
              position: "absolute",
              top: "56px",
              left: "1px",
              fontSize: "20px",
              letterSpacing: "-0.01em",
              whiteSpace: "pre-wrap",
            }}
          >
            <p
              style={{ marginBlockStart: "", marginBlockEnd: "5px" }}
            >{`Email: bkbook@hcmut.edu.vn `}</p>
            <p style={{ margin: "" }}>SĐT: 1017-0958</p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "547px",
          left: "2px",
          width: "716px",
          height: "289px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "20px",
            backgroundColor: "#f4f6fd",
            border: "1px solid #4a7dff",
            boxSizing: "border-box",
            width: "716px",
            height: "289px",
          }}
        />
        <b
          style={{
            position: "absolute",
            top: "15px",
            left: "267px",
            letterSpacing: "-0.01em",
          }}
        >
          Sản phẩm tương tự
        </b>
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "57px",
            width: "602px",
            height: "225px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "rgba(224, 231, 248, 0.37)",
              border: "1px solid #c2d0ff",
              boxSizing: "border-box",
              width: "200px",
              height: "225px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "200px",
                height: "145px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-1611@2x.png"
            />
            <div
              style={{
                position: "absolute",
                top: "149px",
                left: "1px",
                letterSpacing: "-0.01em",
                width:"200px",
              }}
            >
              <p style={{ fontSize:"15px", margin: "0.5px 0" }}>Yết Kiêu dã tượng</p>
              <span style={{ fontSize: "15px", margin: "0.5px 0", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0 }}>5/5</p>
                <sup>
                <img
                  src="/star-svgrepocom.svg"
                  alt=""
                  style={{ marginLeft: "0px", width: "10px", height: "30px" }}
                />
                </sup>
              </span>
              <p style={{ fontSize:"15px",margin: "0.5px 0" }}>42.000<sup>vnd</sup></p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "201px",
              backgroundColor: "rgba(224, 231, 248, 0.37)",
              border: "1px solid #c2d0ff",
              boxSizing: "border-box",
              width: "200px",
              height: "225px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "200px",
                height: "145px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-1612@2x.png"
            />
            <div
              style={{
                position: "absolute",
                top: "149px",
                left: "1px",
                width:"200px",
                letterSpacing: "-0.01em",
              }}
            >
              <p style={{ fontSize:"15px", margin: "0.5px 0" }}>Lục Tiểu Phụng tập 2</p>
              <span style={{ fontSize: "15px", margin: "0.5px 0", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0 }}>3.7/5</p>
                <sup>
                <img
                  src="/star-svgrepocom.svg"
                  alt=""
                  style={{ marginLeft: "0px", width: "10px", height: "30px" }}
                />
                </sup>
              </span>
              <p style={{ fontSize:"15px",margin: "0.5px 0" }}>37.000<sup>vnd</sup></p>
            </div>
            <img
              style={{
                position: "absolute",
                top: "179px",
                left: "46px",
                width: "10px",
                height: "10px",
                overflow: "hidden",
              }}
              alt=""
              src="/star-svgrepocom.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "402px",
              backgroundColor: "rgba(224, 231, 248, 0.37)",
              border: "1px solid #c2d0ff",
              boxSizing: "border-box",
              width: "200px",
              height: "225px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "200px",
                height: "145px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-1613@2x.png"
            />
            <div
              style={{
                position: "absolute",
                top: "149px",
                left: "1px",
                width:"200px",
                letterSpacing: "-0.01em",
              }}
            >
              <p style={{ fontSize:"15px", margin: "0.5px 0" }}>Lộc đỉnh ký tập 1</p>
              <span style={{ fontSize: "15px", margin: "0.5px 0", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0 }}>4.2/5</p>
                <sup>
                <img
                  src="/star-svgrepocom.svg"
                  alt=""
                  style={{ marginLeft: "0px", width: "10px", height: "30px" }}
                />
                </sup>
              </span>
              <p style={{ fontSize:"15px",margin: "0.5px 0" }}>41.000<sup>vnd</sup></p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "547px",
          left: "718px",
          width: "716px",
          height: "289px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "20px",
            backgroundColor: "#f4f6fd",
            border: "1px solid #4a7dff",
            boxSizing: "border-box",
            width: "716px",
            height: "289px",
          }}
        />
        <b
          style={{
            position: "absolute",
            top: "15px",
            left: "250px",
            letterSpacing: "-0.01em",
          }}
        >
          Sản phẩm cùng tác giả
        </b>
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "57px",
            width: "602px",
            height: "225px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "rgba(224, 231, 248, 0.37)",
              border: "1px solid #c2d0ff",
              boxSizing: "border-box",
              width: "200px",
              height: "225px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "200px",
                height: "145px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-1614@2x.png"
            />
            <div
              style={{
                position: "absolute",
                top: "149px",
                left: "1px",
                width:"200px",
                letterSpacing: "-0.01em",
              }}
            >
              {/* <p style={{ margin: "" }}>Thiên long bát bộ tậ..</p>
              <p style={{ margin: "" }}>4.8/5</p>

              <p style={{ margin: "" }}>87.000vnd</p> */}
              <p style={{ fontSize:"15px", margin: "0.5px 0" }}>Thiên long bát bộ tập 1</p>
              <span style={{ fontSize: "15px", margin: "0.5px 0", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0 }}>4.8/5</p>
                <sup>
                <img
                  src="/star-svgrepocom.svg"
                  alt=""
                  style={{ marginLeft: "0px", width: "10px", height: "30px" }}
                />
                </sup>
              </span>
              <p style={{ fontSize:"15px",margin: "0.5px 0" }}>87.000<sup>vnd</sup></p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "201px",
              backgroundColor: "rgba(224, 231, 248, 0.37)",
              border: "1px solid #c2d0ff",
              boxSizing: "border-box",
              width: "200px",
              height: "225px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "200px",
                height: "145px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-1615@2x.png"
            />
            <div
              style={{
                position: "absolute",
                top: "149px",
                left: "1px",
                letterSpacing: "-0.01em",
              }}
            >
              <p style={{ fontSize:"15px", margin: "0.5px 0" }}>Bích huyết kiếm</p>
              <span style={{ fontSize: "15px", margin: "0.5px 0", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0 }}>3.3/5</p>
                <sup>
                <img
                  src="/star-svgrepocom.svg"
                  alt=""
                  style={{ marginLeft: "0px", width: "10px", height: "30px" }}
                />
                </sup>
              </span>
              <p style={{ fontSize:"15px",margin: "0.5px 0" }}>21.000<sup>vnd</sup></p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "402px",
              backgroundColor: "rgba(224, 231, 248, 0.37)",
              border: "1px solid #c2d0ff",
              boxSizing: "border-box",
              width: "200px",
              height: "225px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "200px",
                height: "145px",
                objectFit: "cover",
              }}
              alt=""
              src="/rectangle-1616@2x.png"
            />
            <div
              style={{
                position: "absolute",
                top: "149px",
                left: "1px",
                letterSpacing: "-0.01em",
              }}
            >
             <p style={{ fontSize:"15px", margin: "0.5px 0" }}>Cô gái đồ long</p>
              <span style={{ fontSize: "15px", margin: "0.5px 0", display: "flex", alignItems: "center" }}>
                <p style={{ margin: 0 }}>5/5</p>
                <sup>
                <img
                  src="/star-svgrepocom.svg"
                  alt=""
                  style={{ marginLeft: "0px", width: "10px", height: "30px" }}
                />
                </sup>
              </span>
              <p style={{ fontSize:"15px",margin: "0.5px 0" }}>29.000<sup>vnd</sup></p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #000",
          boxSizing: "border-box",
          width: "1440px",
          height: "122px",
          fontSize: "32px",
          color: "#5081ff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "828px",
            width: "612px",
            height: "121px",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "33.33%",
              top: "0%",
              right: "66.67%",
              bottom: "0%",
              left: "0%",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                backgroundColor: "#fff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 22.5px)",
                left: "calc(50% - 84px)",
                letterSpacing: "-0.01em",
              }}
            >
              <Link to = {menus[0]?.path} className = "stylea">TRANG CHỦ</Link>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "33.33%",
              top: "0%",
              right: "33.33%",
              bottom: "0%",
              left: "33.33%",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                backgroundColor: "#fff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 22.5px)",
                left: "calc(50% - 84px)",
                letterSpacing: "-0.01em",
              }}
            >
              <Link to = {menus[1]?.path} className = "stylea">DANH MỤC</Link>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "33.33%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "66.67%",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                backgroundColor: "#fff",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 22.5px)",
                left: "calc(50% - 84px)",
                letterSpacing: "-0.01em",
              }}
            >
              TÀI KHOẢN
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "260px",
            height: "121px",
            color: "#4a7cff",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "37px",
              left: "142px",
              letterSpacing: "-0.01em",
              display: "inline-block",
              width: "118px",
              height: "35px",
            }}
          >
            BKBOOK
          </div>
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "171px",
              height: "121px",
              objectFit: "cover",
            }}
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "295px",
            width: "338px",
            height: "41px",
            fontSize: "16px",
            color: "#000",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "30px",
              width: "338px",
              height: "41px",
            }}
            alt=""
            src="/searchbar.svg"
          />
          <div
            style={{
              position: "absolute",
              top: "11px",
              left: "50px",
              letterSpacing: "-0.01em",
            }}
          >
            Nhập tên sách, tác giả bạn muốn tìm
          </div>
          <img
            style={{
              position: "absolute",
              height: "60.98%",
              width: "7.4%",
              top: "17.07%",
              right: "88.46%",
              bottom: "21.95%",
              left: "4.14%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/searchsign.svg"
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "24.59%",
            width: "2.08%",
            top: "38.52%",
            right: "51.53%",
            bottom: "36.89%",
            left: "46.39%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/group-17.svg"
        />
        <img
          style={{
            position: "absolute",
            height: "24.59%",
            width: "2.08%",
            top: "38.52%",
            right: "45.97%",
            bottom: "36.89%",
            left: "51.94%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};
export default memo(ViewPage)