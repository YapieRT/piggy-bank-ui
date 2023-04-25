import './step-list.css'
import StepListItem from '../step-list-item/step-list-item';
const StepList = ({ data }) => {

    const steps = data.map(item => {
        const { ...items } = item;
        return (
            <StepListItem
                {...items}
            />
        )
    })
    return (
        <ul className="step-list">
            {steps}
        </ul>
    )

}

export default StepList;