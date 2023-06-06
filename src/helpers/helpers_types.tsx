import { FormCheckType } from "react-bootstrap/esm/FormCheck";

export type ListItem = { icon: string; label: string };

export type ListItems = { [key: string]: ListItem };

export type ActivityItem = {
  unread: boolean;
  timestamp: string;
  eventType: string;
  text: string;
};


export type CreateProject = {
  title: string,
  body: string,
  type: FormCheckType,
  values: string[]
}