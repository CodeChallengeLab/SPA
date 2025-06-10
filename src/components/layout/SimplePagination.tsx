import {
  Box,
  Pagination,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { get, set } from 'mobx';
import { useMemo, useState } from 'react';

interface SimplePaginationProps { 
  totalItems: number; 
  onPageChange: (page: number) => void; 
  gridName: string;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const itemsPerPageOptions = [5, 10, 20, 50];

export const SimplePagination: React.FC<SimplePaginationProps> = ({  
  totalItems,    
  onPageChange, 
  onItemsPerPageChange, 
  gridName
}) => {
  if (totalItems === 0) return null;

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    onPageChange(displayInfo.start);
  };

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(event.target.value);
    onItemsPerPageChange(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const displayInfo = useMemo(() => 
    getDisplayInfo(),[currentPage, itemsPerPage, totalItems]
);
  const computedCount = useMemo(() => getCount(), [totalItems, itemsPerPage]);
 function getCount() {
  return totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;
 }

function getDisplayInfo() {
  return {
    start: totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0,
    end: Math.min(currentPage * itemsPerPage, totalItems),
    total: totalItems
  };
}
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
        mt: 3,
        pt: 2,
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Showing {displayInfo.start}-{displayInfo.end} of {displayInfo.total} {gridName}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <Pagination
          count={computedCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />

        {(
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <InputLabel>Per page</InputLabel>
            <Select
              value={itemsPerPage}
              label="Per page"
              onChange={handleItemsPerPageChange}
            >
              {itemsPerPageOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Stack>
    </Box>
  );
};