'use client'
import { Button, Result, Row } from "antd";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={() => router.back()}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFoundPage;
