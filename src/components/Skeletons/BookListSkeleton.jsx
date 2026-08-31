import Skeleton from "./Skeleton";
import "../Journals/Booklist.css";

const BookCardSkeleton = () => (
  <div className="bookCard">
    <Skeleton width="70%" height="1.1rem" style={{ marginBottom: "10px" }} />
    <Skeleton width="45%" height="0.9rem" style={{ marginBottom: "14px" }} />
    <Skeleton width="60px" height="28px" radius={4} style={{ display: "inline-block", marginRight: "12px" }} />
    <Skeleton width="90px" height="28px" radius={4} style={{ display: "inline-block" }} />
  </div>
);

const BookListSkeleton = ({ count = 6 }) => (
  <div className="bookList">
    {Array.from({ length: count }).map((_, i) => (
      <BookCardSkeleton key={i} />
    ))}
  </div>
);

export default BookListSkeleton;
