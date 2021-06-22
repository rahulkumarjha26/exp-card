import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiActivity } from "@react-icons/all-files/fi/FiActivity";
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import { CgNotes } from "@react-icons/all-files/cg/CgNotes";
import { FaWpforms } from "@react-icons/all-files/fa/FaWpforms";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { Badge } from "@material-ui/core";
import React, { useState } from "react";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    background: "#F15730",
    border: `0px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function App() {
  const [expand, setExpand] = useState(false);
  return (
    <div className="App">
      <div className={expand ? "background-exp" : "background"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          <div className="nav-icon">
            <IoMdArrowBack />
          </div>
          <div
            style={{
              display: "flex",
              width: "150px",
              justifyContent: "space-between",
            }}
          >
            <div className="nav-icon">
              <IoIosArrowBack />
            </div>
            <div className="nav-icon">
              <IoIosArrowForward />
            </div>
            <div className="nav-icon">
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          <div className="content">
            <div className="avatar">RR</div>

            <div style={{ fontSize: "25px", fontWeight: "500" }}>
              Raju Rastogi
            </div>
            <div style={{ fontSize: "16px" }}>Java Developer, Dell India</div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#C8C8C8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 15,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#C8C8C8",
                    width: 15,
                    height: 15,
                    borderRadius: "20px",
                    marginRight: 5,
                  }}
                ></div>
                <div style={{ color: "#8C8C8C" }}>rajurastogi123@gmail.com</div>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#C8C8C8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#C8C8C8",
                    width: 15,
                    height: 15,
                    borderRadius: "20px",
                    marginRight: 5,
                  }}
                ></div>
                <div style={{ color: "#8C8C8C" }}>+9177908352426</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
              }}
            >
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        <div className="bottom-icons">
          <div style={{ textAlign: "center" }}>
            <StyledBadge badgeContent={2} color="secondary" overlap="circle">
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <FiMail size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Messages</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <StyledBadge color="secondary" overlap="circle" badgeContent={2}>
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <FiActivity size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Activity</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <StyledBadge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              invisible
            >
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <AiOutlineCheck size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Evaluate</div>
          </div>
          <div
            style={{
              visibility: expand ? "visible" : "hidden",
              textAlign: "center",
            }}
          >
            <StyledBadge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              invisible
            >
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <CgNotes size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Notes</div>
          </div>

          <div
            className={expand ? "more" : "less"}
            onClick={() => (expand ? setExpand(false) : setExpand(true))}
            style={{
              textAlign: "center",
              position: "absolute",
              marginLeft: "310px",
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: 10,
                cursor: "pointer",
                display: "flex",
                backgroundColor: "#414141",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                border: "1px solid white",
                borderRadius: "100px",
              }}
              className="circle"
            >
              {expand ? (
                <IoIosArrowUp size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </div>

            <div style={{ color: "white", marginTop: 5 }}>
              {expand ? "Less" : "More"}
            </div>
          </div>
        </div>

        <div className={expand ? "bottom-icons" : "bottom-icons-hidden"}>
          <div style={{ textAlign: "center" }}>
            <StyledBadge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              invisible
            >
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <FaWpforms size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Forms</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <StyledBadge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              invisible
            >
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <CgNotes size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Documents</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <StyledBadge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              invisible
            >
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <CgProfile size={30} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}>Profile</div>
          </div>
          <div
            style={{
              visibility: expand ? "visible" : "hidden",
              textAlign: "center",
            }}
          >
            <StyledBadge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              invisible
            >
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  backgroundColor: "#595959",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
                className="circle"
              >
                <CgNotes size={0} />
              </div>
            </StyledBadge>
            <div style={{ color: "white", marginTop: 5 }}></div>
          </div>

          <div
            className={expand ? "more" : "less"}
            onClick={() => (expand ? setExpand(false) : setExpand(true))}
            style={{
              textAlign: "center",
              position: "absolute",
              marginLeft: "310px",
              opacity: 0,
              zIndex: 1,
            }}
          >
            <div
              style={{
                padding: 10,
                cursor: "pointer",
                display: "flex",
                backgroundColor: "#414141",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                border: "1px solid white",
                borderRadius: "100px",
              }}
              className="circle"
            >
              {expand ? (
                <IoIosArrowUp size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </div>

            <div style={{ color: "white", marginTop: 5 }}>
              {expand ? "Less" : "More"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
