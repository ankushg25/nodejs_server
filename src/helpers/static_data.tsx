import { ActivityItem, CreateProject, ListItems } from "./helpers_types";

export const EVENT_TYPE_MAP: ListItems = {
  RESERCHER_ADDED: {
    icon: "text-success bi-person-plus",
    label: "Researcher added",
  },
  PARTICIPANT_ADDED: {
    icon: "text-success bi-person-plus",
    label: "Participant added",
  },
  ERROR_500: {
    icon: "text-danger bi-envelope-exclamation",
    label: "Message Failure",
  },
  PARTICIPANT_PAYMENT: {
    icon: "text-success bi-coin",
    label: "Participant Payment",
  },
  ERROR_400: {
    icon: "text-danger bi-file-earmark-text",
    label: "Documents Unsigned",
  },
  COMPANY_VERIFIED: {
    icon: "text-success bi-patch-check",
    label: "Company Verified!",
  },
};

export const ACTIVITY_FEED_ITEMS: ActivityItem[] = [
  {
    unread: true,
    timestamp: "2023-05-30T14:56:56.588Z",
    eventType: "RESERCHER_ADDED",
    text: "A Resercher Profile was created by Admin for Random User",
  },
  {
    unread: true,
    timestamp: "2023-05-30T10:57:21.675Z",
    eventType: "PARTICIPANT_ADDED",
    text: "A Participant was added for the Resercher in that test",
  },
  {
    unread: false,
    timestamp: "2023-05-30T09:47:39.125Z",
    eventType: "ERROR_500",
    text: "Message Failed to send to that particular user",
  },
  {
    unread: false,
    timestamp: "2023-05-29T16:51:31.415Z",
    eventType: "PARTICIPANT_PAYMENT",
    text: "Someone somewhere was paid on time. So, YaY",
  },
  {
    unread: false,
    timestamp: "2023-05-29T07:37:12.598Z",
    eventType: "ERROR_400",
    text: "Some of the users of that thing have not completed their thang.",
  },
  {
    unread: false,
    timestamp: "2023-05-29T07:57:51.002Z",
    eventType: "COMPANY_VERIFIED",
    text: "Congratulations, You are officially legal (for now)",
  },
];

export const SIDEBAR_MENU_ITEMS: ListItems = {
  customer: {
    icon: "bi-people",
    label: "Customer",
  },
  reports: {
    icon: "bi-book-half",
    label: "Reports",
  },
  projects: {
    icon: "bi-database",
    label: "Projects",
  },
  template: {
    icon: "bi-diagram-3",
    label: "Templates",
  },
  notification: {
    icon: "bi-bell",
    label: "Notifications",
  },
  reports1: {
    icon: "bi-bookmarks",
    label: "Reports",
  },
  projects1: {
    icon: "bi-box-fill",
    label: "Projects",
  },
  template1: {
    icon: "bi-broadcast",
    label: "Templates",
  },
  customer2: {
    icon: "bi-bug-fill",
    label: "Customer",
  },
  reports2: {
    icon: "bi-building",
    label: "Reports",
  },
  projects2: {
    icon: "bi-calendar",
    label: "Projects",
  },
  template2: {
    icon: "bi-calculator",
    label: "Templates",
  },
};


export const CREATE_PROJECT_DATA: CreateProject[] = [
  {
    title: "Research Type",
    body: "Please choose the type of research you will be conducting. This will help us provide the best experience for you.",
    type: "radio",
    values: [
      "Payment Only", "In-depth Interviews", "Usability Testing (moderated)", "Usability Testing (unmoderated)", "Diary Study", "Focus Group"
    ]
  },
  {
    title: "Features",
    body: "Add Features you would like in your project. You can come back and edit this anytime.",
    type: "checkbox",
    values: [
      "Recruit Participants", "Screen Participants", "Send a Survey", "Get Concent", "Schedule Session", "Pay Incentives"
    ]
  },
  {
    title: "Details",
    body: "",
    type: "checkbox",
    values: []
  },
  {
    title: "Researcher",
    body: "",
    type: "checkbox",
    values: []
  },
  {
    title: "Summary",
    body: "",
    type: "checkbox",
    values: []
  },
  {
    title: "Confirmation",
    body: "",
    type: "checkbox",
    values: []
  }
]
