import './security-list.css'
import SecurityListItem from '../security-list-item/security-list-item';

const SecurityList = ({ list }) => {

    const lists = list.map(item => {
        const { ...items } = item;
        return (
            <SecurityListItem
                {...items}
            />
        )
    })
    return (<>
        <ul className="security-list">
            {lists}
        </ul>
    </>)

}

export default SecurityList;