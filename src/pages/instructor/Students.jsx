import CustomTable from "../../components/CustomTable";

export default function Students() {
  const titles = ["Id", "Name", "Email", "Faculty"];
  return (
    <div>
      <div>
        <div>Select Course</div>
        <select>
          <option>Course 1</option>
          <option>Course 2</option>
          <option>Course 3</option>
        </select>
      </div>

      <CustomTable
        titles={titles}
        showActions={true}
        data={[
          {
            id: 1,
            name: "Abdullah Ayman",
            email: "aboode@gmail.com",
            faculty: "Engineering",
          },
        ]}
        actions={[
          {
            label: "Assign to Course",
            className: "bg-secondary",
            handle: (item) => console.log("Assign to Course", item),
          },
        ]}
      />
    </div>
  );
}
