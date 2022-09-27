import './TaskCard.css';
import { CloseCircleOutlined } from '@ant-design/icons';

function TaskCard ({text, onDelete}) {
  return (
    <li 
      className='TaskCard'
      draggable='true'
    >
      <span>{text}</span>
      <CloseCircleOutlined 
        className="TaskCard-button"
        onClick={onDelete}
      />
    </li>
  );
}

export default TaskCard;