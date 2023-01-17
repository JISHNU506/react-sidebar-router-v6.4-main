import React, { useState } from "react";
import { useEffect } from "react";
import "./pagestyle.css";
import axios from "axios";

function Home() {
  const [details, setdetails] = useState({
    shop: [],
    office: [],
    commercialLand: [],
    commercialBuilding: [],
    industrialBuilding: [],
    industrialLand: [],
    coWorkspace: [],
    priveteOffice: [],
    meetingRoom: [],
  });

  useEffect(() => {
    axios.get("https://api.xentice.com/api/postadSelect").then((responce) => {
      console.log("data==>", responce);
      console.log(JSON.parse(responce.data[1].propertyType).name);
      console.log(JSON.parse(responce.data[0].details).price.rate);
      console.log(JSON.parse(responce.data[0].details).title);

      const data = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Commercial Shop";
      });

      const office = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Commercial Office";
      });

      const commercialLand = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Commercial Land";
      });

      const industrialBuilding = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Industrial Building";
      });

      const commercialBuilding = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Commercial Building";
      });

      const industrialLand = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Industrial Land";
      });

      const coWorkspace = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Co-working Space";
      });

      const priveteOffice = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Private Office";
      });

      const meetingRoom = responce.data.filter((reading) => {
        return JSON.parse(reading.propertyType).name == "Meeting Room";
      });

      setdetails({
        ...details,
        shop: data,
        office: office,
        commercialLand: commercialLand,
        commercialBuilding: commercialBuilding,
        industrialLand: industrialLand,
        industrialBuilding: industrialBuilding,
        coWorkspace: coWorkspace,
        priveteOffice: priveteOffice,
        meetingRoom: meetingRoom,
      });
    });
  }, []);

  console.log("overolldata=====>", details);

  return (
    <div className="home">
      <div className="inline">
        <div className="content">
          <div className="content-item">
            <div className="items">
              <img src="images/comercial.png" alt="" />
              <br />
              Comercial shoppppp
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/office.png" alt="" />
              <br />
              Comercial office
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/land.png" alt="" />
              <br />
              Comercial Land
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/building.png" alt="" />
              <br />
              comercial Building
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/indbuilding.png" alt="" />
              <br />
              Industrial Building
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/indland.png" alt="" />
              <br />
              Industrial Land
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/wrkspc.png" alt="" />
              <br />
              Co-working Space
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/profc.png" alt="" />
              <br />
              Private Office
            </div>
          </div>
          <div className="content-item">
            <div className="items">
              <img src="images/meetinroom.png" alt="" />
              <br />
              Meeting Room
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="search">
          <p>Choose from 25,00+</p>
          <p>Spaces for your</p>
          <p>Business</p>
          <span>Get inspired and find your perfect place</span>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
               Comercial Office
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
               office
              </a>
              <a class="dropdown-item" href="#">
               commercial building
              </a>
              <a class="dropdown-item" href="#">
               commercial Land
              </a>
            </div>
            <div class="dropdown">
              <button
              
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
             Select City
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
           DELHI
                </a>
                <a class="dropdown-item" href="#">
             AGRA
                </a>
                <a class="dropdown-item" href="#">
                 MUMBAI
                </a>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </div>
      </div>
      <div className="inline1">
        <div className="content1">
          <div className="content-item1">
            <div className="items1">
              <img src="images/buid.png" alt="" />
              <br />
              Builders
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/arch.png" alt="" />
              <br />
              Architects
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/bank.png" alt="" />
              <br />
              Banking
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/it.png" alt="" />
              <br />
              IT Support
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/lab.png" alt="" />
              <br />
              Labourers
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/ment.png" alt="" />
              <br />
              Mentors
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/insu.png" alt="" />
              <br />
              Advocates
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/life.png" alt="" />
              <br />
              Insurance
            </div>
          </div>

          <div className="content-item1">
            <div className="items1">
              <img src="images/xen.png" alt="" />
              <br />
              Lifestyle
            </div>
          </div>
          <div className="content-item1">
            <div className="items1">
              <img src="images/eco.png" alt="" />
              <br />
              Xentice Mart
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column1"></div>
        <div className="column2"></div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/cs1.png" alt="" />
          <h1>Comercial Shop</h1>
        </div>
        <div className="mainitem1">
          {details.shop.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                  <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                  
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mainitem">
        <div className="headerpart">
          <img src="images/co1.png" alt="" />
          <h1>Commercial Office</h1>
        </div>
        <div className="mainitem1">
          {details.office.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/cl1.png" alt="" />
          <h1>Commercial Land</h1>
        </div>
        <div className="mainitem1">
          {details.commercialLand.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150px}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/cb1.png" alt="" />
          <h1>Commercial Building</h1>
        </div>
        <div className="mainitem1">
          {details.commercialBuilding.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/ib1.png" alt="" />
          <h1>Industrial Building</h1>
        </div>
        <div className="mainitem1">
          {details.industrialBuilding.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/il1.png" alt="" />
          <h1>Industrial Land</h1>
        </div>
        <div className="mainitem1">
          {details.industrialLand.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/cws1.png" alt="" />
          <h1>Co-working Space</h1>
        </div>
        <div className="mainitem1">
          {details.coWorkspace.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price?.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/po1.png" alt="" />
          <h1>Private Office</h1>
        </div>
        <div className="mainitem1">
          {details.priveteOffice?.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price?.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mainitem">
        <div className="headerpart">
          <img src="images/mr1.png" alt="" />
          <h1>Meeting Room</h1>
        </div>
        <div className="mainitem1">
          {details.meetingRoom?.map((value) => (
            <div className="card">
              <img
                className="card-img-top"
                src={
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                    .substring(
                      0,
                      value.images
                        .replace(/\\/g, "")
                        .replace(/"/g, "")
                        .replace(/[[\]]/g, "")
                        .indexOf(",")
                    ) ||
                  value.images
                    .replace(/\\/g, "")
                    .replace(/"/g, "")
                    .replace(/[[\]]/g, "")
                }
                alt="Card image cap"
                // height={150}
              />
              <div className="card-body">
                <h1 className="card-text">
                <div className="name">
                  <span className="herader">
                    {JSON.parse(value.details).title}
                  </span>{" "}
                  <span className="like">
                    {" "}
                    <i className="far fa-heart" />
                  </span>
                  </div>
                </h1>
                <p className="card-text">
                  <i class="fas fa-map-marker-alt" />
                  {JSON.parse(value.location).city}
                </p>
                <p className="amount">
                  RS {JSON.parse(value.details).price?.rate}/Month
                </p>
                <span className="explore">
                  <a href="">explore now</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
