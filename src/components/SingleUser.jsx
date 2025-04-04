import { useSelector } from "react-redux";

const SingleUser = () => {
    const list = useSelector(state => state.list.list)
    const su = list[1];
    console.log(su);
    return(
        <div>
            Single user info from list store: 
            <div>{su.name}</div>
        </div>
    )
}

export default SingleUser;