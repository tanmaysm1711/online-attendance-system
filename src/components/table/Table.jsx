import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      studentName: "John Smith",
      date: "1 March",
      cumulativeAttendance: 785,
      // method: "Cash on Delivery",
      status: "Present",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      studentName: "Michael Doe",
      date: "1 March",
      cumulativeAttendance: 900,
      // method: "Online Payment",
      status: "Absent",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      studentName: "John Smith",
      date: "1 March",
      cumulativeAttendance: 35,
      // method: "Cash on Delivery",
      status: "Present",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      studentName: "Jane Smith",
      date: "1 March",
      cumulativeAttendance: 920,
      // method: "Online",
      status: "Present",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      studentName: "Harold Carol",
      date: "1 March",
      cumulativeAttendance: 2000,
      // method: "Online",
      status: "Absent",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student UID</TableCell>
            {/* <TableCell className="tableCell">Product</TableCell> */}
            <TableCell className="tableCell">Student Name</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Cumulative Attendance</TableCell>
            {/* <TableCell className="tableCell">Payment Method</TableCell> */}
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{row.studentName}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.cumulativeAttendance}</TableCell>
              {/* <TableCell className="tableCell">{row.method}</TableCell> */}
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
