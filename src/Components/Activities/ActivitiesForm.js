import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../FormStyles.css";

const ActivitiesForm = ({
  activity,
  handleChange,
  handleChangeDescription,
  handleSubmit,
}) => {
  const { name, description, image } = activity ? activity : {};

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Activity Title"
      ></input>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => handleChangeDescription(event, editor)}
      />
      <input
        type="file"
        name="file"
        accept=".png, .jpg"
        onChange={handleChange}
      />
      <img src={image} alt="" />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ActivitiesForm;
