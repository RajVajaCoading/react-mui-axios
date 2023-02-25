import React from "react";
import { Firstname, Lastname } from "./MainComponent";
const Component3 = () => {
  return (
    <div>
      <Firstname.Consumer>
        {(value) => {
          return (
            <Lastname.Consumer>
              {(lname) => {
                return (
                  <>
                    <h1>this is Componet 3 {value}</h1>
                    <h1>{lname}</h1>
                  </>
                );
              }}
            </Lastname.Consumer>
          );
        }}
      </Firstname.Consumer>
    </div>
  );
};

export default Component3;
