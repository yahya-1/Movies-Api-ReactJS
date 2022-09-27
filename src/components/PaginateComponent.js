import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getPages } from "../redux/action/moviesAction";
import { useSelector, useDispatch } from "react-redux";

function PaginateComponent() {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageClick = (data) => {
    dispatch(getPages(data.selected + 1));
  };

  return (
    <div dir="rtl">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center my-4"}
        pageClassName={"page-item "}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item "}
        previousLinkClassName={"page-link borderB"}
        nextClassName={"page-item "}
        nextLinkClassName={"page-link borderB"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default PaginateComponent;
