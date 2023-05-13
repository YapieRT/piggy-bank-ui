import './info-list-item.css';
const InfoListItem = (props) => {
  const { icon, title, descr } = props;
  return (
    <li className='info-list-item' key={title}>
      <span className='square-box'>
        <img src={icon} alt='icon' className='icon' />
      </span>
      <div className='info-container'>
        <h2 className='title'>{title}</h2>
        <h3 className='descr'>{descr}</h3>
      </div>
    </li>
  );
};

export default InfoListItem;
