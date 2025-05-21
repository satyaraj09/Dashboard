import {
  BellRing,
  CircleDollarSign,
  CircleHelp,
  Link2Icon,
  LinkIcon,
  MessageCircleMore,
  NotepadText,
  Podcast,
  Plug,
  ScrollText,
} from "lucide-react";

export const navMenu = {
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: ScrollText,
      items: [
        {
          title: "Create Articles",
          url: "#",
        },
        {
          title: "Generated Articles",
          url: "#",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
        {
          title: "AI Keyword to Article",
          url: "#",
        },
        {
          title: "Steal Competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Manual Keyword t Article",
          url: "#",
        },
        {
          title: "Bulk Keyword to Article",
          url: "#",
        },
        {
          title: "Longtail Keyword to Article",
          url: "#",
        },
        {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "/error",
      icon: NotepadText,
    },
    {
      title: "Internal Links",
      url: "/error",
      icon: LinkIcon,
    },
    {
      title: "Free Backlines",
      url: "/error",
      icon: Link2Icon,
    },
    {
      title: "Integration",
      url: "/error",
      icon: Plug,
    },
    {
      title: "Subscription",
      url: "/error",
      icon: Podcast,
    },
    {
      title: "Affiliate Program",
      url: "/error",
      icon: CircleDollarSign,
    },
    {
      title: "Help Center",
      url: "/error",
      icon: CircleHelp,
    },
    {
      title: "Updates",
      url: "/error",
      icon: BellRing,
    },
    {
      title: "Live Shat Support",
      url: "/error",
      icon: MessageCircleMore,
    },
  ],
};
