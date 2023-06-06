import { FormCheckType } from "react-bootstrap/esm/FormCheck";

export interface ListItem {
  icon: string;
  label: string;
}

export interface ListItems {
  [key: string]: ListItem;
}

export interface ActivityItem {
  unread: boolean;
  timestamp: string;
  eventType: string;
  text: string;
}

export interface CreateProject {
  title: string;
  body: string;
  type: FormCheckType;
  values: string[];
}
