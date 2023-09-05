import React, { useEffect } from "react";
import "./flipCard.css";

const FlipCard = ({ data }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={data.image} alt={`${data.image}`} />
        </div>
        <div className="flip-card-back">
          <div className="back-content">
            <h2>Token_id#{data.token_id}</h2>
            <h3 id="attribute-heading">Attributes</h3>
            <table className="tbl-attributes">
              {data.attributes &&
                data.attributes.map((attribute, i) => {
                  return (
                    <tr key={i}>
                      <td>{attribute.trait_type}</td>
                      <td className="values">{attribute.value}</td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
