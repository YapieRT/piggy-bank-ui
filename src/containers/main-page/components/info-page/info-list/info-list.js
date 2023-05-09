import './info-list.css'
import InfoListItem from '../info-list-item/info-list-item';

const InfoList = ({ info }) => {

    const cards = info.map(item => {
        const { ...items } = item;
        return (
            <InfoListItem
                {...items}
            />
        )
    })
    return (<>
        <ul className="info-list">
            {cards}
        </ul>
    </>)

}

export default InfoList;