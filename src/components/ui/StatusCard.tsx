const StatusCard = ({
  title = 'Title',
  value = 0,
  base,
  height = 140,
  color = 'linear-gradient(90deg, rgba(85,85,85,1) 0%, rgba(129,129,129,1) 100%)',
}: {
  title?: string;
  value?: number;
  base?: string;
  height?: number;
  color?: string;
}) => {
  return (
    <div
      style={{
        minHeight: height,
        background: color,
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <p
        style={{ lineHeight: 1, color: '#fff', fontSize: 16, fontWeight: 700 }}
      >
        {title}
      </p>
      <p
        style={{
          color: '#fff',
          lineHeight: 1.3,
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        {value}
      </p>
      {
        base ? <p style={{ color: '#fff', fontSize: 10 }}>{base}</p> : null
      }
      
    </div>
  );
};

export default StatusCard;
