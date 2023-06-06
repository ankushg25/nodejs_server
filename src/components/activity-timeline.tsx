import { ACTIVITY_FEED_ITEMS, EVENT_TYPE_MAP } from "@/helpers/static_data";
import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "./activity-timeline.module.scss";
import { dateOptions, timeOptions } from "@/helpers/const_maps";
import { ActivityItem } from "@/helpers/helpers_types";

function renderActivity({
  eventType,
  timestamp,
  unread,
  text,
}: ActivityItem): JSX.Element {
  const dateObj = new Date(timestamp);

  // Replace with existing helper functions
  const dateString = new Intl.DateTimeFormat("en-GB", dateOptions).format(
    dateObj
  );
  // Replace with existing helper functions
  const timeString = new Intl.DateTimeFormat("en-GB", timeOptions).format(
    dateObj
  );

  return (
    <ListGroup variant="flush" className="border-bottom">
      <ListGroupItem
        className={`${styles.activity_timeline_date} text-secondary fw-semibold`}
      >
        <div>
          {dateString}
          {renderBadge(unread)}
        </div>
        <div>{timeString}</div>
      </ListGroupItem>
      <ListGroupItem className="activity_timeline d-flex justify-content-top px-0">
        <i className={`${EVENT_TYPE_MAP[eventType].icon} fs-3 px-3`}></i>
        <div className={`${styles.activity_timeline_text} py-1`}>
          <div className="my-1 py-1">
            <strong>{EVENT_TYPE_MAP[eventType].label}</strong>
          </div>
          <div>{text}</div>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
}

function renderBadge(unread: boolean) {
  if (unread)
    return (
      <Badge pill bg="primary" className="mx-1">
        New
      </Badge>
    );
  return <></>;
}

const ActivityTimeline = () => {
  return (
    <div
      key="activity-timeline"
      className="col-sm-3 py-2 m-2 mt-0 min-vh-100 rounded bg-white"
    >
      <div className="d-flex px-3 justify-content-start align-items-center border-bottom">
        <i className="bi-activity fs-3 px-2 text-success"></i>
        <span>
          <strong>Activity Timeline</strong>
        </span>
      </div>
      <div className="px-3 ">
        {ACTIVITY_FEED_ITEMS.map((item, idx) => {
          return (
            <>
              {idx === 0 ? (
                <div className="border-bottom py-2 fw-bold">Today</div>
              ) : idx === 3 ? (
                <div className="border-bottom py-2 fw-bold">Yesterday</div>
              ) : (
                ""
              )}
              {renderActivity(item)}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ActivityTimeline;
