import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCatPictures } from "../app/slices/catsSlice"

export default function Cats() {

    const dispatch = useDispatch()
    const { cats, isLoading } = useSelector((state) => state.cats)

    useEffect(() => {
        dispatch(fetchCatPictures())
    }, [])

    console.log(cats)
    const displayCats = cats.map((cat, index) => {
        return (
            <div key={index}>
                <img src={cat.url} />
                <h2>{cat.title}</h2>
            </div>
        )
    })

    return (
        <section className="custom-container">
            <h1>CATS</h1>
            {isLoading ? (
                <div className="italic">Loading...</div>
            ): (
                <div className="flex flex-wrap gap-7">{displayCats}</div>
            )}
        </section>
    )
}