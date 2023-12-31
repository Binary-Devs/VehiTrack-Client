import { Button, Flex } from "antd";
import Image from "next/image";
import a from '../../../assets/start-with-vms.jpg';

export default function ProjectDemo() {
  return (
    <div className="bg-[#f7f7f7] flex flex-col justify-center items-center p-8 ">
      <div className="max-w-3xl text-center space-y-7">
        <h1 className="text-4xl ">Start Your project with VMS</h1>
        <p className="text-xl">
          The inflation of technology brings both expeditious capabilities to
          your individual. Take a true adventure in Human Resource Management,
          several blessings of technology, and be emphatic to manage yours
        </p>
        <Flex justify="center" align="center" gap="small">
        <Button>See details </Button>
        <Button type="primary">Buy Now</Button>
      </Flex>
      </div>
      <Image src={a} width={700} height={500} alt="" className="rounded-xl my-3 object-cover overflow-hidden" />
    </div>
  );
}
