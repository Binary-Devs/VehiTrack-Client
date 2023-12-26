type ActionBarProps = {
  title?: string;
  inline?: boolean;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children, inline }: ActionBarProps) => {
  return (
    <div className={inline ? "flex justify-between" : undefined}>
      <h1 className="text-2xl">{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
