import { ACTIVITY_FEED_ITEMS, EVENT_TYPE_MAP } from "@/helpers/static_data";
import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "./activity-timeline.module.scss";
import { dateOptions, timeOptions } from "@/helpers/const_maps";

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
    <div className="col-sm-3 py-2 m-2 mt-0 min-vh-100 rounded bg-white">
      <div className="d-flex px-3 justify-content-start align-items-center border-bottom">
        <i className="bi-activity fs-3 px-2 text-success"></i>
        <span>
          <strong>Activity Timeline</strong>
        </span>
      </div>
      <div className="px-3 ">
        {ACTIVITY_FEED_ITEMS.map((item, idx) => {
          const dateObj = new Date(item.timestamp);
          const dateString = new Intl.DateTimeFormat(
            "en-GB",
            dateOptions
          ).format(dateObj);

          const timeString = new Intl.DateTimeFormat(
            "en-GB",
            timeOptions
          ).format(dateObj);

          return (
            <>
              {idx === 0 ? (
                <div className="border-bottom py-2 fw-bold">Today</div>
              ) : idx === 3 ? (
                <div className="border-bottom py-2 fw-bold">Yesterday</div>
              ) : (
                ""
              )}

              <ListGroup variant="flush" className="border-bottom">
                <ListGroupItem
                  className={`${styles.activity_timeline_date} text-secondary fw-semibold`}
                >
                  <div>
                    {dateString}
                    {renderBadge(item.unread)}
                  </div>
                  <div>{timeString}</div>
                </ListGroupItem>
                <ListGroupItem className="activity_timeline d-flex justify-content-top px-0">
                  <i
                    className={`${
                      EVENT_TYPE_MAP[item.eventType].icon
                    } fs-3 px-3`}
                  ></i>
                  <div className={`${styles.activity_timeline_text} py-1`}>
                    <div className="my-1 py-1">
                      <strong>{EVENT_TYPE_MAP[item.eventType].label}</strong>
                    </div>
                    <div>{item.text}</div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ActivityTimeline;
