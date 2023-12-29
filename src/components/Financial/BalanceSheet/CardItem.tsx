
const CardItem = ({ title, value = 0 }: { title: string; value: number }) => {
    return (
      <p
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          lineHeight: 2.5,
        }}
      >
        {title} <span>{value}</span>
      </p>
    );
  };

export default CardItem;