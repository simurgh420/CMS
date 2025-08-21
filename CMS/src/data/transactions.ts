import { type Transaction} from '@/types/type'

export const transactions:Transaction [] = [
    {
      customer: "Liam Johnson",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "2023-08-15",
      amount: "$250.00",
      status: "Approved",
    },
    {
      customer: "Olivia Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "2023-08-14",
      amount: "$150.00",
      status: "Pending",
    },
    {
      customer: "Noah Williams",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      date: "2023-08-14",
      amount: "$350.00",
      status: "Approved",
    },
    {
      customer: "Emma Brown",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      date: "2023-08-13",
      amount: "$450.00",
      status: "Declined",
    },
];