import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, Content } from "./tab";
import "../style.css";
import { GridList } from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { SketchPicker } from "react-color";
export default function Input() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [skype, setSkype] = useState("");
  const [image, setImage] = useState("");
  const [active, setActive] = useState(0);
  const [color, setcolor] = useState("#ff0000");
  const [cardStatus, setCardStatus] = useState(0);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const [inputList, setInputList] = useState([{ firstName: "" }]);

  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };

  // handle click event of the Remove button
  // const handleRemoveClick = (index) => {
  //   const list = [...inputList];
  //   list.splice(index, 1);
  //   setInputList(list);
  // };

  // handle click event of the Add button
  const handleAddClick = (url) => {
    setInputList([...inputList, { firstName: url }]);
  };
  console.log(inputList);
  return (
    <div className={"align"}>
      <div className="App">
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            General
          </Tab>

          <Tab onClick={handleClick} active={active === 1} id={1}>
            Images
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>
            Social
          </Tab>
          <Tab onClick={handleClick} active={active === 3} id={3}>
            Design
          </Tab>
        </Tabs>
        <>
          <Content active={active === 0}>
            <div>
              <div className="wrapper">
                <div className="form-wrapper">
                  <h2>Create your Signature</h2>
                  <div>
                    <div className="email">
                      <label htmlFor="Name">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Company">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Position">Position</label>
                      <input
                        type="text"
                        name="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                      />
                    </div>

                    <div className="email">
                      <label htmlFor="Department">Department</label>
                      <input
                        type="text"
                        name="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Mobile">Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Website">Website</label>
                      <input
                        type="text"
                        name="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Email">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Address">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="email">
                      <label htmlFor="Skype">Skype</label>
                      <input
                        type="text"
                        name="skype"
                        value={skype}
                        onChange={(e) => setSkype(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
          <Content active={active === 1}>
            <div className="wrapper">
              <div className="form-wrapper">
                <h2>Create your Signature</h2>
                <div className="email">
                  <label htmlFor="Name">Image</label>
                  <input
                    type="text"
                    name="image"
                    alt="img"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </Content>
          <Content active={active === 2}>
            <div className="wrapper">
              <div className="form-wrapper">
                <h2>Create your Signature</h2>
                <div className="email">
                  <label htmlFor="Name">Facebook</label>
                  <input
                    type="text"
                    name="Facebook"
                    value={image1}
                    onChange={(e) => setImage1(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label htmlFor="Company">Twitter</label>
                  <input
                    type="text"
                    name="Twitter"
                    value={image2}
                    onChange={(e) => setImage2(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label htmlFor="Position">Whatsapp</label>
                  <input
                    type="text"
                    name="Whatsapp"
                    value={image3}
                    onChange={(e) => setImage3(e.target.value)}
                  />
                </div>
                {/* <div className="App">
                  {inputList.map((x, i) => {
                    return (
                      <div className="box">
                        <input
                          name="firstName"
                          placeholder="Twitter"
                          value={x.twitter}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                        <div className="btn-box">
                          {inputList.length !== 1 && (
                            <button
                              className="mr10"
                              onClick={() => handleRemoveClick(i)}
                            >
                              Remove
                            </button>
                          )}
                          {inputList.length - 1 === i && <button>Add</button>}
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ marginTop: 20 }}>
                    {JSON.stringify(inputList)}
                  </div>
                </div> */}
                <GridList cellHeight={160} cols={1}>
                  <GridListTile>
                    <TwitterIcon
                      size={32}
                      round={true}
                      onClick={() =>
                        handleAddClick(
                          "https://img.icons8.com/fluent/48/000000/facebook-new.png"
                        )
                      }
                    />
                    <FacebookIcon size={32} round={true} />
                    <WhatsappIcon size={32} round={true} />
                    <FacebookMessengerIcon size={32} round={true} />
                    <HatenaIcon size={32} round={true} />
                    <InstapaperIcon size={32} round={true} />
                    <LineIcon size={32} round={true} />
                    <LinkedinIcon size={32} round={true} />
                    <LivejournalIcon size={32} round={true} />
                    <TelegramIcon size={32} round={true} />
                    <MailruIcon size={32} round={true} />
                    <TumblrIcon size={32} round={true} />
                    <HatenaIcon size={32} round={true} />
                    <InstapaperIcon size={32} round={true} />
                    <LineIcon size={32} round={true} />
                    <LinkedinIcon size={32} round={true} />
                    <FacebookIcon size={32} round={true} />
                    <WhatsappIcon size={32} round={true} />
                    <LinkedinIcon size={32} round={true} />
                    <LivejournalIcon size={32} round={true} />
                    <TelegramIcon size={32} round={true} />
                    <MailruIcon size={32} round={true} />
                    <WhatsappIcon size={32} round={true} />
                    <FacebookMessengerIcon size={32} round={true} />
                    <HatenaIcon size={32} round={true} />
                    <InstapaperIcon size={32} round={true} />
                    <LineIcon size={32} round={true} />
                    <FacebookMessengerIcon size={32} round={true} />
                    <HatenaIcon size={32} round={true} />
                    <InstapaperIcon size={32} round={true} />
                    <TumblrIcon size={32} round={true} />
                    <HatenaIcon size={32} round={true} />
                    <InstapaperIcon size={32} round={true} />
                    <LineIcon size={32} round={true} />
                    <LinkedinIcon size={32} round={true} />
                    <FacebookIcon size={32} round={true} />
                    <LineIcon size={32} round={true} />
                    <LinkedinIcon size={32} round={true} />
                    <HatenaIcon size={32} round={true} />
                    <InstapaperIcon size={32} round={true} />
                    <LineIcon size={32} round={true} />
                    <LinkedinIcon size={32} round={true} />
                    <LivejournalIcon size={32} round={true} />
                    <TelegramIcon size={32} round={true} />
                    <MailruIcon size={32} round={true} />
                  </GridListTile>
                </GridList>
              </div>
            </div>
          </Content>
          <Content active={active === 3}>
            <div className="wrapper">
              <div className="form-wrapper">
                <h2>Create your Signature</h2>
                <h3>SET COLOR</h3>
                <SketchPicker
                  color={color}
                  onChangeComplete={(color) => {
                    setcolor(color.hex);
                  }}
                />
                <div className={"alignbutton"}>
                  <button onClick={(e) => setCardStatus(0)}>TEMPLATE 1</button>
                  <button onClick={(e) => setCardStatus(1)}>TEMPLATE 2</button>
                  <button onClick={(e) => setCardStatus(2)}>TEMPLATE 3</button>
                </div>
              </div>
            </div>
          </Content>
        </>
      </div>
      {cardStatus === 0 ? (
        <div
          stlye={{
            backgroundColor: color,
            color: color,
          }}
        >
          <Card
            style={{
              width: 700,
              backgroundColor: "aliceblue",
              marginTop: "120px",
              height: "450px",
              borderRadius: "10px",
            }}
            className={"style"}
          >
            <h2 className={"heading"}>SIGNATURE PREVIEW </h2>
            <CardContent>
              <div className={"card"}>
                <img
                  style={{
                    width: "150px",
                    height: "200px",
                  }}
                  src={image}
                />
                <div className={"content"}>
                  <Typography
                    style={{ color: color }}
                    color="textSecondary"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                  <div className={"flex"}>
                    <Typography style={{ color: color }}>{company}</Typography>|
                    <Typography
                      style={{
                        marginBottom: 1,
                        color: color,
                      }}
                      color="textSecondary"
                    >
                      {position}
                    </Typography>
                    |
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ color: color }}
                    >
                      {department}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {mobile}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {website}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {email}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {address}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {skype}
                  </Typography>
                </div>

                <div className={"image"}>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image1}
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image2}
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image3}
                  />
                </div>
              </div>

              <button className={"save"}>SAVE SIGNATURE</button>
            </CardContent>
            {/* <Divider orientation="vertical" flexItem /> */}
          </Card>
        </div>
      ) : cardStatus === 1 ? (
        <div stlye={{}}>
          <Card
            style={{
              width: 700,
              backgroundColor: "aliceblue",
              marginTop: "120px",
              height: "450px",
            }}
            className={"style"}
          >
            <h2 className={"heading"}>SIGNATURE PREVIEW </h2>
            <CardContent>
              <div className={"card"}>
                <div className={"content"}>
                  <Typography
                    style={{ color: color }}
                    color="textSecondary"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                  <div className={"flex"}>
                    <Typography style={{ color: color }}>{company}</Typography>|
                    <Typography
                      style={{
                        marginBottom: 1,
                        color: color,
                      }}
                      color="textSecondary"
                    >
                      {position}
                    </Typography>
                    |
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ color: color }}
                    >
                      {department}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {mobile}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {website}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {email}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {address}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ color: color }}
                  >
                    {skype}
                  </Typography>
                </div>
                <div className={"image"}>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image1}
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image2}
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image3}
                  />
                </div>
                <img
                  style={{
                    width: "150px",
                    height: "200px",
                  }}
                  src={image}
                />
              </div>
              <button className={"save"}>SAVE SIGNATURE</button>
            </CardContent>
            {/* <Divider orientation="vertical" flexItem /> */}
          </Card>
        </div>
      ) : (
        <div
          stlye={{
            backgroundColor: color,
            color: color,
          }}
        >
          <Card
            style={{
              width: 700,
              backgroundColor: "aliceblue",
              marginTop: "120px",
              height: "450px",
            }}
            className={"style"}
          >
            <h2 className={"heading"}>SIGNATURE PREVIEW </h2>
            <CardContent>
              <div className={"card"}>
                <img
                  style={{
                    width: "150px",
                    height: "200px",
                  }}
                  src={image}
                />
                <div className={"content"}>
                  <Typography
                    style={{ color: color, fontSize: 18 }}
                    color="textSecondary"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                  <div className={"flex"}>
                    <Typography style={{ color: color }}>{company}</Typography>|
                    <Typography
                      style={{
                        marginBottom: 1,
                        color: color,
                        fontSize: 18,
                      }}
                      color="textSecondary"
                    >
                      {position}
                    </Typography>
                    |
                    <Typography
                      variant="body2"
                      component="h6"
                      style={{ color: color, fontSize: 18 }}
                    >
                      {department}
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    component="h6"
                    style={{ color: color, fontSize: 18 }}
                  >
                    {phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="h6"
                    style={{ color: color }}
                  >
                    {mobile}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="h5"
                    style={{ color: color }}
                  >
                    {website}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="h6"
                    style={{ color: color }}
                  >
                    {email}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="h6"
                    style={{ color: color, fontSize: 18 }}
                  >
                    {address}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="h6"
                    style={{ color: color, fontSize: 18 }}
                  >
                    {skype}
                  </Typography>
                </div>
                <div className={"image"}>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image1}
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image2}
                  />
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={image3}
                  />
                </div>
              </div>
              <button className={"save"}>SAVE SIGNATURE</button>
            </CardContent>
            {/* <Divider orientation="vertical" flexItem /> */}
          </Card>
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Input />, rootElement);
