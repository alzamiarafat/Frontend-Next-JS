import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { categoryService } from '../../service/categoryService';
import { useSelector } from "react-redux";

export default function id() {
    const router = useRouter()
    const { id } = router.query
    const [name, setName] = useState("");

    const { singleCategoryResults } = useSelector(state => state.category);

    const handleSubmit = (e) => {
        const requestData = {
            id: id,
            name: name
        }
        e.preventDefault();
        categoryService.updateCategory(requestData)
            .then((res) => {
                setName('');
                alert(res.data.data.updateCategory.message)

            })
            .then(() => router.push('/category'))
            .catch((err) => {
                alert(err)
            });
    };

    return (
        <div className="container mt-4">
            <div className={styles.grid}>
                <form onSubmit={(e) => handleSubmit(e)} className="form-control">
                    <div className="form-group">
                        <label htmlFor="name">Catagory ID</label>
                        <input type="text" className="form-control" value={singleCategoryResults ? singleCategoryResults.uid : ''} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Catagory Name</label>
                        <input type="text" className="form-control" defaultValue={singleCategoryResults ? singleCategoryResults.name : ''} onChange={(e) => setName(e.target.value)} id="name" name="name" />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Update</button>
                </form>
            </div>
        </div>
    )
}
