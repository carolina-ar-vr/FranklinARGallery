import React, { useState } from "react";
import TutorialDataService from "../services/EntityService";

const Entity = (props) => {
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
  const [currentEntity, setCurrentEntity] = useState(initialEntityState);
  const [message, setMessage] = useState("");

  const { entity } = props;
  if (currentEntity.key !== entity.key) {
    setCurrentEntity(entity);
    setMessage("");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentEntity({ ...currentEntity, [name]: value });
  };

  const updatePublished = (status) => {
    DataService.update(currentEntity.key, { published: status })
      .then(() => {
        setCurrentEntity({ ...currentEntity, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateEntity = () => {
    const data = {
        gltf_model: entity.gltf_model,
        latitude: entity.latitude,
        longitude: entity.longitude,
        position: entity.position,
        rotation: entity.rotation,
        scale: entity.scale,
        value: entity.value,
        published: false
    };

    DataService.update(currentEntity.key, data)
      .then(() => {
        setMessage("The entity was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEntity = () => {
    DataService.remove(currentEntity.key)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEntity ? (
        <div className="edit-form">
          <h4>Entity</h4>
          <form>

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
              <label>
                <strong>Status:</strong>
              </label>
              {currentEntity.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentEntity.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteEntity}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateEntity}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Entity...</p>
        </div>
      )}
    </div>
  );
};

export default Entity;
