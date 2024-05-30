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
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { IoLibraryOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import ProfilePic from "../app/components/ui/ProfilePic";

export const sideNavLinks = {
  mainSection: [
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
          name: "Reading Summary",
          href: "/reading-summary",
          icon: Squares2X2Icon,
        },
        {
          name: "Favourites",
          href: "/favourites",
          icon: BookmarkIcon,
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
  ],
  resourcesSection: [
    {
      name: "GitHub",
      href: "https://github.com/yhajiali/mylibrary",
      icon: LuGithub,
    },
    {
      name: "Twitter",
      href: "https://x.com/yhajiali_",
      icon: FaXTwitter,
    },
    {
      name: "Feedback",
      href: "mailto:yusuf@yhajiali.com",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ],
};
