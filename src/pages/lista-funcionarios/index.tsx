import router from "next/router";
import { useState } from "react";
import EmployeeTable from "src/views/dashboard/EmployeeTable";

interface RowType {
  nome: string;
  email: string;
}

const rows_mock: RowType[] = [
  {
    nome: "Sally Quinn",
    email: "eebsworth2m@sbwire.com",
  },
  {
    nome: "Margaret Bowers",
    email: "kocrevy0@thetimes.co.uk",
  },
  {
    nome: "Minnie Roy",
    email: "ediehn6@163.com",
  },
  {
    nome: "Ralph Leonard",
    email: "dfalloona@ifeng.com",
  },
  {
    nome: "Annie Martin",
    email: "sganderton2@tuttocitta.it",
  },
  {
    nome: "Adeline Day",
    email: "hnisius4@gnu.org",
  },
  {
    nome: "Lora Jackson",
    email: "ghoneywood5@narod.ru",
  },
  {
    nome: "Rodney Sharp",
    email: "dcrossman3@google.co.jp",
  },
];

const EmployeeList = () => {
  const [rows, setRows] = useState(rows_mock);

  const onDelete = (email: string) => {
    const newRows = rows.slice();
    const indexToRemove = newRows.findIndex(
      (employee) => employee.email === email
    );
    newRows.splice(indexToRemove, 1);
    setRows(newRows);
  };

  const onEdit = () => {
    router.push("/editar-funcionario");
  };

  return <EmployeeTable rows={rows} onDelete={onDelete} onEdit={onEdit} />;
};

export default EmployeeList;
