import React, { useState } from "react";
import axios from "axios";

function SendImgToStrapi() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("files", selectedFile);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            ref: "production",
            refId: "15", // замените на идентификатор связанной сущности
            field: "mediaProduct", // замените на имя поля, содержащего файл
          },
        }
      );

      const fileId = uploadResponse.data[0].id;
      console.log(fileId);

      const createResponse = await axios.post(
        "http://localhost:1337/api/productions",
        {
          data: {
            mediaProduct: fileId, // замените на имя поля, содержащего файл
          },
        }
      );

      console.log(createResponse.data);
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default SendImgToStrapi;
