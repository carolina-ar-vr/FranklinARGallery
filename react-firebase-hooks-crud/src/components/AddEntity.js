import React, { useState } from "react";
import TutorialDataService from "../services/EntityService";

const AddEntity = () => {
  const initialEntityState = {
    image: "",
    locName:"",
    lat: 0,
    long: 0,
    position: "",
    rotation: "",
    scale: "",
    published: false
  };
  const [entity, setEntity] = useState(initialEntityState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEntity({ ...entity, [name]: value });
  };

  const saveEntity = () => {
    var data = {
      image: entity.image,
      locName:entity.locName,
      lat: entity.lat,
      long: entity.long,
      position: entity.position,
      rotation: entity.rotation,
      scale: entity.scale,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEntity = () => {
    setEntity(initialEntityState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEntity}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              required
              value={entity.image}
              onChange={handleInputChange}
              name="image"
            />
          </div>
          <div className="form-group">
            <label htmlFor="locName">Location Name</label>
            <input
              type="text"
              className="form-control"
              id="locName"
              required
              value={entity.locName}
              onChange={handleInputChange}
              name="locName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lat">Lattitude</label>
            <input
              type="text"
              className="form-control"
              id="lat"
              required
              value={entity.lat}
              onChange={handleInputChange}
              name="lat"
            />
          </div>
          <div className="form-group">
            <label htmlFor="long">Longitude</label>
            <input
              type="text"
              className="form-control"
              id="long"
              required
              value={entity.long}
              onChange={handleInputChange}
              name="long"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              id="position"
              required
              value={entity.position}
              onChange={handleInputChange}
              name="position"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rotation">Rotation</label>
            <input
              type="text"
              className="form-control"
              id="rotation"
              required
              value={entity.rotation}
              onChange={handleInputChange}
              name="rotation"
            />
          </div>
          <div className="form-group">
            <label htmlFor="scale">Scale</label>
            <input
              type="text"
              className="form-control"
              id="scale"
              required
              value={entity.scale}
              onChange={handleInputChange}
              name="scale"
            />
          </div>


          <button onClick={saveEntity} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddEntity;