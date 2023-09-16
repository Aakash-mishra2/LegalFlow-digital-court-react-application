import React from "react";
import Card from "../../shared/UIelements/Card";
import CitizenItem from "./CitizenItem";
import "./styles/CitizenList.css";

export default function CitizenList(props){
  if (!props.users) {
    return (
      <div className="center">
        <Card>
          <h2>No Citizens found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="citizens-list">
      {
        props.users.map((plaintiff) => {
        return (
          (<CitizenItem
            key={plaintiff.id}
            id={plaintiff.id}
            name={plaintiff.name}
            imgURL={plaintiff.image}
            caseCount={plaintiff.cases.length}
          />)
        );
      })
      }
    </ul>
  );
};

