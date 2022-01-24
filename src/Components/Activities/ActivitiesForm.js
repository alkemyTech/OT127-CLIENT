import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";

const ActivitiesForm = ({
  activity,
  handleChangeName,
  handleChangeImage,
  handleChangeDescription,
  handleSubmit,
}) => {
  const { name, description, image } = activity;
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        placeholder="Activity Title"
      />
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => handleChangeDescription(event, editor)}
      />
      <input
        type="file"
        name="file"
        accept=".png, .jpg"
        onChange={handleChangeImage}
      />
      <img src={image} alt="" />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ActivitiesForm;
