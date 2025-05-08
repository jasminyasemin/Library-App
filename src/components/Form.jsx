import '../styles/Form.css';

// Reusable form component for creating and updating a category
const Form = ({ form, setForm, handleSubmit, isEditing }) => {
    return (
      <form className='c-form' onSubmit={handleSubmit}>
        {/* Input for category name */}
        <input
            type="text"
            className='form-input'
            placeholder="Category Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Input for category description */}
        <input
            type="text"
            className='form-input'
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        {/* Button text changes based on whether user is editing or adding */}
        <button className='form-btn' type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
    );
};
  
export default Form;