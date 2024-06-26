import { useEffect, useState, useRef } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  //contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const textRef = useRef();
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "Embedded",
      title: "Embedded",
    },
    {
      id: "Design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      /*  case "content":
        setData(contentPortfolio);
        break; */
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={index}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((port) => (
          <div className="item">
            <img src={port.img} alt="" />
            <h3>{port.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
