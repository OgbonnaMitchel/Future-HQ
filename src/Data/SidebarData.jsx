import ClassIcon from "../assets/images/class.png";
import HubIcon from "../assets/images/hub.png";
import WorkIcon from "../assets/images/work_outline.png";
import MailIcon from "../assets/images/mail.png";
import AddIcon from "../assets/images/add.png";
import Avatar from "../assets/images/Avatar.png";

export const sidebarData = [
  {
    id: 1,
    section: "Classroom",
    icon: ClassIcon,
    dropdown: true,
    dropicon: true,
    options: [
      { id: 1, title: "Course Outlines", path: "/course-outline" },
      { id: 2, title: "Class Schedule", path: "/class-schedule" },
      { id: 3, title: "Assignments", path: "/assignments" },
      { id: 4, title: "My Grades", path: "/my-grades" },
      { id: 5, title: "Class Resources", path: "/class-resources" },
    ],
  },
  {
    id: 2,
    section: "Communities",
    icon: HubIcon,
    dropdown: true,
    dropicon: true,
    options: [
      { id: 1, title: "FutureLabs HQ", badge: 20, path: "/futurelabs-hq" },
      { id: 2, title: "Design 2023", path: "/design-2023" },
      { id: 3, title: "Create a Community", icon: AddIcon, path: "/create-community" },
    ],
  },
  {
    id: 3,
    section: "Projects",
    icon: WorkIcon,
    dropdown: true,
    dropicon: true,
    options: [
      { id: 1, title: "Project Alpha", path: "/project-alpha" },
      { id: 2, title: "Project Beta", path: "/project-beta" },
    ],
  },
  {
    id: 4,
    section: "Direct Messages",
    icon: MailIcon,
    dropdown: true,
    dropicon: true,
    options: [
      {
        id: 1,
        title: "Olivia Rhye",
        avatar: Avatar,
        status: "online",
        path: "/messages/olivia-rhye",
      },
      {
        id: 2,
        title: "Sophia Carter",
        avatar: Avatar,
        status: "offline",
        path: "/messages/sophia-carter",
      },
      {
        id: 3,
        title: "Emma Stone",
        avatar: Avatar,
        status: "online",
        path: "/messages/emma-stone",
      },
    ],
  },
];

export const announcementData = [
  {
    id: 1,
    section: "Announcements",
    dropdown: true,
    dropicon: false,
    options: [
      {
        id: 1,
        title: "General Announcements",
        active: true,
        path: "/general-announcements",
      },
      {
        id: 2,
        title: "Classroom Announcements",
        active: false,
        path: "/classroom-announcements",
      },
    ],
  },
];
