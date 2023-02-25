import React from 'react'
import { faker } from '@faker-js/faker';
import jsf from 'json-schema-faker';


const Faker =()=>{
  
  const schema ={
    "street_address": "1600 Pennsylvania Avenue NW",
    "city": "Washington",
    "state": "DC",
    "type": "business"
 }
  
  const refs = [
    {
      id: 'Test',
      type: 'boolean',
    }
  ];
const refs1 = [{
  "properties": {
    "id": {
        "description": "A unique identifier for an employee",
        "type": "number"
    },
    "name": {
        "description": "Full name of the employee",
        "type": "string"
    },
    "age": {
        "description": "Age of the employee",
        "type": "number"
    },
    "hobbies": {
        "description": "Hobbies of the employee",
        "type": "object",
        "properties": {
            "indoor": {
                "type": "array",
                "items": {
                    "description": "List of indoor hobbies",
                    "type": "string"
                }
            },
            "outdoor": {
                "type": "array",
                "items": {
                    "description": "List of outdoor hobbies",
                    "type": "string"
                }
            }
        }
    }
}
}]
  const cwd = `${__dirname}/schema`;
  const syncValue = jsf.generate(schema,refs1);
  console.log("schema =====>",schema)
  console.log("refs =====>",refs1)



  // const asyncValue =  jsf.resolve(schema, refs, cwd);
  // console.log(asyncValue)
  // console.log("resolve",refs)


  return(
    <>
    <h1>{syncValue}</h1>
    
    </>
  )
}
// const Faker = () => {
    
//   return (
//     <div>
//         <h1>{faker.phone.number() }</h1>
//         <h1>{faker.address.city()}</h1>

//         {faker.name.firstName()}
//     </div>
//   )
// }

 export default Faker