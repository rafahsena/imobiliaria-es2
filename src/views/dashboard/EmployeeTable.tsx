// ** MUI Imports
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import IconButton from "@mui/material/IconButton";
import { Pencil, TrashCan } from "mdi-material-ui";
import { Typography } from "@mui/material";

type EmployeeTable = {
  rows: Array<object>;
  onDelete: Function;
  onEdit: Function;
};

const EmployeeTable = ({ rows, onDelete, onEdit }) => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">
                <Typography
                  fontSize={12}
                  fontWeight={600}
                  sx={{ pr: (theme) => theme.spacing(4) }}
                >
                  Ações
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.nome}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell
                  sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                >
                  {row.nome}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={onEdit} color="info">
                    <Pencil />
                  </IconButton>
                  <IconButton onClick={() => onDelete(row.email)} color="error">
                    <TrashCan />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default EmployeeTable;
