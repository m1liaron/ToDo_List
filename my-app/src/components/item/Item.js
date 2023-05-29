import './Item.css'

const Item = ({todo}) => {
    return (
        <div className="container">
            <h1>{todo.title}</h1>
            <p>{todo.status}</p>
        </div>
    )
}

export default Item;