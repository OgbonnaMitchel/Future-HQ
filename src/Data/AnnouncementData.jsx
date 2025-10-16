import React from "react";
import ProfileAvater from "../assets/images/Avatar.png";
import PostImage from "../assets/images/Rectangle 5.png";
import { UNSAFE_decodeViaTurboStream } from "react-router";

export const announcementPost = [
  {
    id: 1,
    author: {
      name: "Manasseh Udim",
      avatar: ProfileAvater,
      verified: true,
    },
    date: "22nd October 2023",
    time: "12:15",
    title: "Future Anniversary",
    content:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard.",
    image: null,
    reactions: 0,
    liked: false,
    replies: 0,
  },
  {
    id: 2,
    author: {
      name: "Manasseh Udim",
      avatar: ProfileAvater,
      verified: true,
    },
    date: "21st October 2023",
    time: "09:00",
    title: "Future Anniversary",
    content:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard.",
    image: null,
    reactions: 211,
    liked: true,
    replies: 13,
  },
  {
    id: 3,
    author: {
      name: "Obadiah Mitchel",
      avatar: ProfileAvater,
      verified: true,
    },
    date: "22nd October 2023",
    time: "12:15",
    title: "Future Anniversary",
    content:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard.",
    image: PostImage,
    reactions: 2000,
    liked: true,
    replies: 1000,
  },
  {
    id: 4,
    author: {
      name: "Manasseh Udim",
      avatar: ProfileAvater,
      verified: false,
    },
    date: "22nd October 2023",
    time: "12:15",
    title: "Future Anniversary",
    content:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard.",
    image: null,
    reactions: 500,
    liked: true,
    replies: 7,
  },
  {
    id: 5,
    author: {
      name: "Agnes Ekanem",
      avatar: ProfileAvater,
      verified: true,
    },
    date: "22nd October 2023",
    time: "12:15",
    title: "Future Anniversary",
    content:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard.",
    image: PostImage,
    reactions: 900,
    liked: false,
    replies: 200,
  },
];
