import React, { useState } from "react";
import TutorialDataService from "../services/EntityService";

const Entity = (props) => {
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
    TutorialDataService.update(currentEntity.key, { published: status })
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
        image: currentEntity.image,
        locName:currentEntity.locName,
        lat: currentEntity.lat,
        long: currentEntity.long,
        position: currentEntity.position,
        rotation: currentEntity.rotation,
        scale: currentEntity.scale
    };

    TutorialDataService.update(currentEntity.key, data)
      .then(() => {
        setMessage("The entity was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEntity = () => {
    TutorialDataService.remove(currentEntity.key)
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