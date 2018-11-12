/* retirado de: http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google */
// modificado para o número de items ser 6 ao invés de 10
export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 6) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 6) {
      // less than 6 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 6 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 6;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
