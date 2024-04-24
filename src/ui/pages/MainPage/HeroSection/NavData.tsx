export interface NavDataProps {
  id: number;
  name: string;
  link: string;
}

export const NAV_DATA: NavDataProps[] = [
  {
    id: 1,
    name: "Products",
    link: "/details",
  },
  {
    id: 2,
    name: "Rooms",
    link: "/details",
  },
  {
    id: 3,
    name: "Service",
    link: "/details",
  },
  {
    id: 4,
    name: "Inspirations",
    link: "/details",
  },
];
