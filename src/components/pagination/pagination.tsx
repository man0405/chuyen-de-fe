import { useRef, useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

interface Props {
  totalRecords: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (pageNum: number) => void;
  setCurrentPage: (pageNum: number) => void;
}

const PaginationComponent = ({
  totalRecords,
  currentPage,
  pageSize,
  setCurrentPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalRecords / pageSize);
  const pageRef = useRef(currentPage - 1);
  //   useEffect(() => {
  //     handlePageChange(page);
  //   }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    pageRef.current = newPage;
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <Pagination className="pt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            isActive={currentPage < 1}
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(index + 1)}
              isActive
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(totalRecords, currentPage + 1))
            }
            isActive={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
