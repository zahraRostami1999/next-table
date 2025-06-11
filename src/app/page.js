import Table from "@/components/table/Table";

export default function Home() {
  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "نام" },
    { key: "email", label: "آدرس ایمیل" },
  ];
  
  const data = [
    { id: 1, name: "John Doe", email: "abc@gmail.com"},
    { id: 2, name: "Jane Smith", email: "abc@gmail.com"},
    { id: 3, name: "Alice Johnson", email: "sdsf@gmail.com"}
  ]
  return (
    <>
      <main>
        <Table columns={columns} data={data} title="لیست کاربران" />
      </main>
    </>
  );
}
