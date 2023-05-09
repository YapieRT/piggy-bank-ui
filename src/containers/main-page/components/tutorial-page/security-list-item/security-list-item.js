import './security-list-item.css'
const SecurityListItem = (props) => {
    const { descr } = props;
    return (
        <li className="security-list-item">{descr}</li>
    )
}

export default SecurityListItem;