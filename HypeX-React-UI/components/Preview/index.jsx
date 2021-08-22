import React from "react";
import "./Preview.css";

function Preview(props) {
  const { file_16010748630161, file_16010758285291, file_16010766079571 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="preview screen">
        <div className="overlap-group-35">
          <img className="file1601074863016-1" src={file_16010748630161} />
          <img className="file1601075828529-1" src={file_16010758285291} />
          <img className="file1601076607957-1" src={file_16010766079571} />
        </div>
      </div>
    </div>
  );
}

export default Preview;
