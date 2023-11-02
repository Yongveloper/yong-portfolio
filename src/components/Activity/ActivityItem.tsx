import WebIcon from "@/assets/images/web.svg";

const ActivityItem = ({
  name,
  period,
  description,
  link,
}: {
  name: string;
  period: string[];
  description: string[];
  link: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
          {link && (
            <a target="_blank" rel="noreferrer" href={link} className="w-fit">
              <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
            </a>
          )}
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <ul>
          {description.map((item, index) => (
            <li key={index}>
              <span className="whitespace-pre-wrap">{`${item}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityItem;
