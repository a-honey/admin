import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { List, ListPaginationContext, useGetList } from "react-admin";

const GeulroquisList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, total } = useGetList("geulroquis", {
    pagination: { page: currentPage, perPage: 9 },
  });

  if (error || !total) return <p>오류 발생: {error?.message}</p>;

  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };

  console.log(total);

  return (
    <List
      sx={{ marginTop: 3, marginLeft: "100px", marginRight: "300px" }}
      pagination={false}
    >
      <Grid container spacing={2}>
        {data &&
          data.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  width="100"
                  height="200"
                  image={item.url}
                  alt={item.name}
                />
              </Card>
            </Grid>
          ))}
      </Grid>
      <Pagination
        count={Math.ceil(total / 9)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}
      />
    </List>
  );
};

export default GeulroquisList;
