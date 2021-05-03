import React, { useState } from "react";
import TutorialDataService from "../services/EntityService";

const AddEntity = () => {
  const initialEntityState = {
    gltf_model: "",
    latitude:0,
    longitude: 0,
    position: "",
    rotation: "",
    scale: "",
    value: "",
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
        gltf_model: entity.gltf_model,
        latitude: entity.latitude,
        longitude: entity.longitude,
        position: entity.position,
        rotation: entity.rotation,
        scale: entity.scale,
        value: entity.value,
        published: false
    };

    DataService.create(data)
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
            <label htmlFor="gltf-model">gltf-model</label>
            <input
              type="text"
              className="form-control"
              id="gltf_model"
              required
              value={entity.gltf_model}
              onChange={handleInputChange}
              name="gltf_model"
            />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">lattitude</label>
            <input
              type="text"
              className="form-control"
              id="latitude"
              required
              value={entity.latitude}
              onChange={handleInputChange}
              name="latitude"
            />
          </div>
          <div className="form-group">
            <label htmlFor="longitude">longitude</label>
            <input
              type="text"
              className="form-control"
              id="longitude"
              required
              value={entity.longitude}
              onChange={handleInputChange}
              name="longitude"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">position</label>
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
            <label htmlFor="rotation">rotation</label>
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
            <label htmlFor="scale">scale</label>
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
          <div className="form-group">
            <label htmlFor="value">value</label>
            <input
              type="text"
              className="form-control"
              id="value"
              required
              value={entity.value}
              onChange={handleInputChange}
              name="value"
            />
          </div>
          <div className="form-group">
            <label htmlFor="published">published</label>
            <input
              type="text"
              className="form-control"
              id="published"
              required
              value={entity.published}
              onChange={handleInputChange}
              name="published"
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
