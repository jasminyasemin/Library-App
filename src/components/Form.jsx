import '../styles/Form.css';

const Form = ({ form, setForm, handleSubmit, isEditing }) => {
    return (
      <form className='c-form' onSubmit={handleSubmit}>
        <input
            type="text"
            className='form-input'
            placeholder="Category Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
            type="text"
            className='form-input'
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form,       description: e.target.value })}
        />

        <button className='form-btn' type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
    );
  };
  
  export default Form;