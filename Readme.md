- [Programming hero docs](https://github.com/Apollo-Level2-Web-Dev/Level2-Batch4-PH-University-Server) uses [Babel](https://babeljs.io/) for Fast Refresh
- [LogRocket docs](https://blog.logrocket.com/linting-typescript-eslint-prettier) uses [Babel](https://babeljs.io/) for Fast Refresh
- [Mongoose docs](https://mongoosejs.com/) uses [Babel](https://babeljs.io/) for Fast Refresh
- [Validator-Js docs](https://github.com/validatorjs/validator.js) uses [Babel] for Fast Refresh
- [joi docs](https://www.npmjs.com/package/joi) uses [Babel] for Fast Refresh
- [zod docs](https://zod.dev/) uses [Babel] for Fast Refresh
- [bcrypt docs](https://www.npmjs.com/package/bcrypt) uses [Babel] for Fast Refresh
- [status docs](https://www.npmjs.com/package/http-status) uses [Babel] for Fast Refresh
- [bcrypt docs](https://www.npmjs.com/package/bcrypt) uses [Babel] for Fast Refresh

it uses future

- [.Eslintrc docs](https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg) uses [Babel](https://babeljs.io/) for Fast Refresh
- [Facebook blog](https://www.facebook.com/100004778526351/videos/908806490911910/) uses [Babel](https://babeljs.io/) for Fast Refresh



- [Lorem Ipsum](https://www.lipsum.com/) uses [Babel](https://babeljs.io/) for Fast Refresh


- fronted image upload code

import './App.css'

function App() {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0]; 
    if (!file) {
      console.log("No file selected");
      return; 
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "image-upload");
    data.append("cloud_name", "df1plpdvy");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/df1plpdvy/image/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const uploadImageUrl = await res.json();
      console.log("Uploaded Image URL:", uploadImageUrl.url); 
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <input
        type="file"
        className="file-input"
        onChange={handleFileUpload}
      />
    </>
  );
}

export default App;
