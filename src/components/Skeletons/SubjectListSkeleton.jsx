import Skeleton from "./Skeleton";
import "../PastPapers/SubjectCard.css";
import "../PastPapers/SubjectList.css";

const SubjectCardSkeleton = () => (
  <div className="card">
    <Skeleton width="70%" height="1.1rem" style={{ margin: "0 auto 14px" }} />
    <Skeleton width="130px" height="38px" radius={6} style={{ margin: "12px auto 0" }} />
  </div>
);

const SubjectListSkeleton = ({ count = 8 }) => (
  <div className="cards">
    {Array.from({ length: count }).map((_, i) => (
      <SubjectCardSkeleton key={i} />
    ))}
  </div>
);

export default SubjectListSkeleton;
