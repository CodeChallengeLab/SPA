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
import { useEffect, useMemo, useState } from 'react';

interface SimplePaginationProps {
  totalItems: number;
  onPageChange: (page: number) => void;
  gridName: string;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageParam: number;
}

export const SimplePagination: React.FC<SimplePaginationProps> = ({
  totalItems,
  onPageChange,
  onItemsPerPageChange,
  gridName,
  itemsPerPageParam
}) => {
  const itemsPerPageOptions = useMemo(() => getOptions(), []);
  if (totalItems === 0) return null;
  function getOptions() {
    return [itemsPerPageParam, 10, 20, 50];
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {    
    setCurrentPage(page);
    onPageChange(page* itemsPerPage - itemsPerPage);
    
  };

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(event.target.value);
    onItemsPerPageChange(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);  
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const displayInfo = useMemo(() =>
    getDisplayInfo(), [currentPage, itemsPerPage, totalItems]
  );
  const computedCount = useMemo(() => getCount(), [totalItems, itemsPerPage]);
  useEffect(() => {
    setItemsPerPage(itemsPerPageParam);
  }, [itemsPerPageParam]);

  function getCount() {
    return totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;
  }

  function getDisplayInfo() {
    return {
      start: totalItems > 0 ? (currentPage - 1) * itemsPerPage : -1,
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