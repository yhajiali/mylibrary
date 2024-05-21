// Icons
import {
  MapIcon,
  FireIcon,
  ForwardIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  BookOpenIcon,
  BookmarkIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { IoLibraryOutline } from "react-icons/io5";
import ProfilePic from "../components/ui/ProfilePic";

export const sideNavLinks = [
  {
    title: "For You",
    links: [
      {
        name: "My Feed",
        href: "/feed",
        icon: ProfilePic,
      },
      {
        name: "Explore",
        href: "/explore",
        icon: MapIcon,
      },
      {
        name: "Popular",
        href: "/popular",
        icon: FireIcon,
      },
    ],
  },
  {
    title: "Library",
    links: [
      {
        name: "Currently Reading",
        href: "/reading",
        icon: BookOpenIcon,
      },
      {
        name: "Up Next",
        href: "/up-next",
        icon: ForwardIcon,
      },
      {
        name: "Finished",
        href: "/finished",
        icon: CheckCircleIcon,
      },
      {
        name: "Favorites",
        href: "/favorites",
        icon: BookmarkIcon,
      },
      {
        name: "Bookshelf",
        href: "/bookshelf",
        icon: IoLibraryOutline,
      },
    ],
  },
  {
    title: "Manage",
    links: [
      {
        name: "My Reading Summary",
        href: "/reading-summary",
        icon: Squares2X2Icon,
      },
      {
        name: "Master Database",
        href: "/master-database",
        icon: PencilSquareIcon,
      },
      {
        name: "Customize",
        href: "/customize",
        icon: AdjustmentsHorizontalIcon,
      },

      {
        name: "Settings",
        href: "/settings",
        icon: CogIcon,
      },
    ],
  },
];
