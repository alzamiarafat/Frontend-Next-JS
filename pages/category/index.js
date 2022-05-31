import { useState } from 'react';
import { categoryService } from '../../service/categoryService';
import { parentCategoryService } from '../../service/parentCategoryService';
import { useDispatch } from "react-redux";
import { setSingleCategoryResults } from "../../app/categoryReducer";
import { useRouter } from 'next/router'


export default function Category({ categories, perentCategories }) {
    const router = useRouter()

    const [parentUid, setParentUid] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        let resquestData = {
            parentUid: parentUid,
            name: name
        }
        e.preventDefault();
        categoryService.createCategory(resquestData)
            .then((res) => {
                setName('');
                setParentUid('');
                alert(res.data.data.createCategory.message)
            }).then(() => router.reload())
            .catch((err) => {
                alert(err)
            });

    };

    const categoryHandler = (value) => {
        router.replace({
            pathname: `/category/${value.uid}`,
        })
        dispatch(setSingleCategoryResults(value));
    }

    return (
        <div className="container mt-4">
            <form onSubmit={(e) => handleSubmit(e)} className="form-control">
                <div className='row'>
                    <div className="col-6 form-group">
                        <label htmlFor="name">Parent Catagory Name</label>
                        <select className="form-select" onChange={(e) => setParentUid(e.target.value)}>
                            <option selected value="" disabled>Select One</option>
                            {perentCategories && perentCategories.map((parent, index) =>
                                <option key={index} value={parent.uid}>{parent.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-6 form-group">
                        <label htmlFor="name">Catagory Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" name="name" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary my-3">Add</button>
            </form>
            <div className="row mt-3">
                {categories && categories.map((category, index) =>
                    <div className="col-md-2 col-sm-3 border m-3 p-3" key={index} onClick={() => categoryHandler(category)}>
                        <a href='#'>
                            <h2>{category.uid}</h2>
                            <p>{category.name}</p>
                        </a>
                    </div>
                )}
            </div>
        </div >

    )
}

export async function getStaticProps() {
    const parents = [];
    const { data } = await categoryService.getCategory();
    const response = await parentCategoryService.getParentCategory()
    const perentCategories = response.data.data.getCategories.result.categories

    perentCategories.map((parentCategory) => {
        if (parentCategory.parents.length > 0) {
            parentCategory.parents.map((parent) => {
                parents.push(parent)
            })
        }
    })

    const uids = parents.map(o => o.uid)
    const filteredParents = parents.filter(({ uid }, index) => !uids.includes(uid, index + 1))

    return {
        props: {
            categories: data.data.getCategories.result.categories,
            perentCategories: filteredParents
        },
    };
}