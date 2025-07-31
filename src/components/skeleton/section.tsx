import { ProfileSection } from "../section/section";
import { Skeleton } from "../ui/skeleton";

const SectionSkeletion = () => {
  return (
    <ProfileSection>
      <Skeleton className="w-[10rem] h-8" />

      <div className="flex flex-col gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <Skeleton className="w-[10rem] h-5" />
            <Skeleton className="w-full h-6" />
          </div>
        ))}
      </div>
    </ProfileSection>
  );
};

export { SectionSkeletion };
