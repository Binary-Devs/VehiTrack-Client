import ManagerUpdate from "@/components/CreateUpdateFrom/ManagerUpdate";

const ManagerEdit = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <ManagerUpdate id={params.id} />
    </>
  );
};

export default ManagerEdit;
