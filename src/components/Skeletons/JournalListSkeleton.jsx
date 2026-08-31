import Skeleton from "./Skeleton";
import "../Journals/JournalCard.css";

const JournalCardSkeleton = () => (
  <div className="journalCard">
    <Skeleton height={220} radius={0} />
    <div className="cardContent">
      <Skeleton width="40%" height="0.7rem" style={{ marginBottom: "0.8rem" }} />
      <Skeleton width="85%" height="1.25rem" style={{ marginBottom: "0.6rem" }} />
      <Skeleton width="100%" height="0.95rem" style={{ marginBottom: "0.4rem" }} />
      <Skeleton width="70%" height="0.95rem" style={{ marginBottom: "1.3rem" }} />
      <Skeleton width="45%" height="0.9rem" />
    </div>
  </div>
);

const JournalListSkeleton = ({ count = 6 }) => (
  <div className="journalCardGrid">
    {Array.from({ length: count }).map((_, i) => (
      <JournalCardSkeleton key={i} />
    ))}
  </div>
);

export default JournalListSkeleton;
