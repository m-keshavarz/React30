import React, { useState } from "react";

const VetLog = () => {
  const [petType, setPetType] = useState();
  const [petName, setPetName] = useState();
  const [petOwner, setPetOwner] = useState();
  const [petIllnes, setPetIllnes] = useState();
  const [results, setResult] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setResult([...results, { petType, petName, petOwner, petIllnes }]);
  };

  const resultDiv = results.map(
    ({ petName, petType, petOwner, petIllnes }, index) => {
      return (
        <div className="petResult" key={index}>
          <h3 className="petTypeResult">{petType}</h3>
          <p className="petNameResult">Name Of The Pet: {petName}</p>
          <p className="petOwnerResult">Name Of The Owner: {petOwner}</p>
          <p className="petIllnessResult">The Pet's Illness: {petIllnes}</p>
        </div>
      );
    }
  );

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label className="petType">
          Type of pet:
          <select
            name="petType"
            value={petType}
            className="selection"
            onChange={(e) => setPetType(e.target.value)}
          >
            <option>Select</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
          </select>
        </label>
        <br />
        <label htmlFor="petNameInput" className="petNameLabel">
          Pet Name:
          <input
            type="text"
            name="input for pet name"
            id="petNameInput"
            className="petNameInput"
            onChange={(e) => setPetName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="petOwnerId" className="petOwnerLabel">
          Pet Owner:
          <input
            type="text"
            name="pet owner name"
            id="petOwnerId"
            className="petOwnerInput"
            onChange={(e) => setPetOwner(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="petIllnessId" className="petIllness">
          Pet Illness
          <input
            type="text"
            id="petIllnessId"
            className="petIllnessInput"
            onChange={(e) => setPetIllnes(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" className="submit" />
      </form>
      <div className="petResultContainer">
        {results.length === 0 ? "No Pets Added Yet!" : resultDiv}
      </div>
    </div>
  );
};

export default VetLog;
