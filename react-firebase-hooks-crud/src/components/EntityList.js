import React, { useState } from "react";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/EntityService";
import Entity from "./Entity";

const EntityList = () => {
  const [currentEntity, setCurrentEntity] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  
  const [entities, loading, error] = useList(TutorialDataService.getAll());

  const refreshList = () => {
    setCurrentEntity(null);
    setCurrentIndex(-1);
  };

  const setActiveEntity = (entity, index) => {
    const {image,locName,lat,long,position,rotation,scale,published } = entity.val();

    setCurrentEntity({
      key: entity.key,
      image,
      locName,
      lat,
      long,
      position,
      rotation,
      scale,
      published
    });

    setCurrentIndex(index);
  };

  const removeAllEntity = () => {
    TutorialDataService.removeAll()
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Entity List</h4>

        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
        {!loading &&
            entities &&
            entities.map((entity, index) => (
            <li
              className={"list-group-item " + (index === currentIndex ? "active" : "")}
              onClick={() => setActiveEntity(entity, index)}
              key={index}
            >
              {entity.val().locName}
            </li>
          ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEntity}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentEntity ? (
          <Entity entity={currentEntity} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Please click on a Entity...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntityList;