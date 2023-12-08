import { LiItem } from 'components';

export const ContactsItem = ({ item, onDelete }) => {
  return (
    <LiItem>
      <span>
        {item.name} {item.number}
      </span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </LiItem>
  );
};
