import { addProduct } from "@/app/lib/actions"
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"
const AddProductPage = () => {
    return (
      <div className={styles.container}>
        <form action={addProduct} className={styles.form} >
          <input type="text" placeholder="Title" name="title" required/>
          <select name="cat" id="cat">
          <option value="general">Choose a Catagory</option>
            <option value="smartphone">Smartphone</option>
            <option value="electronics">Electronics</option>
            <option value="kitchen essentials">Kitchen Essentials</option>
          </select>
          <input type="number" placeholder="Price" name="price" required />
        <input type="number" placeholder="Stock" name="stock" required />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
  export default AddProductPage