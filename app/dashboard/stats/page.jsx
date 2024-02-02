// import styles from "@/app/ui/dashboard/stats/stats.module.css"
// import Link from "next/link"
// import Search from "@/app/ui/dashboard/search/search"
// import Tables from "@/app/ui/dashboard/tables/tables"


// const CustomerStat = () => {
//     return (
//         <div className={styles.container}>
//             <div className={styles.top}>
//                 <Search placeholder={"Search for a customer.."}></Search>
//             </div>
//             <h3>Active</h3>
//             <div className={styles.active}>
//                 <Tables></Tables>
//                 <button className={styles.expand}>Expand Table</button>
//             </div>
//             <h3>Closed and docs awaited</h3>
//             <div className={styles.closed}>
//             <Tables></Tables>
//                 <button className={styles.expand}>Expand Table</button>
//             </div>
//             <h3>Docs recieved and link sent</h3>
//             <div className={styles.received}>
//             <Tables></Tables>
//                 <button className={styles.expand}>Expand Table</button>
//             </div>
//             <h3>Archived</h3>
//             <div className={styles.archived}>
//             <Tables></Tables>
//                 <button className={styles.expand}>Expand Table</button>
//             </div>
//         </div>
//     )

// }

// export default CustomerStat





import React from 'react';
import ActiveUsers from "@/components/stats/activeusers" ; 
import DocumentsPendingUsers from "@/components/stats/documentspendingusers"; 
import PaymentLinkPendingUsers from "@/components/stats/paymentlinkpendingusers"; 
import PaymentDueUsers from "@/components/stats/paymentdueusers"; 
import CompletedUsers from "@/components/stats/completedusers"; 
import styles from "@/app/ui/dashboard/stats/stats.module.css"; 
import Link from "next/link";

const UsersPage = () => {
  // Dummy data for testing, replace it with your actual user data
  const activeUsers = [
    { id: 1, name: 'User 1', phoneNumber: '1234567890', lastActive: '2022-03-01', attendedBy: 'Admin' },
    { id: 2, name: 'User 2', phoneNumber: '9876543210', lastActive: '2022-03-02', attendedBy: 'User1' },
    // Add more users as needed
  ];

  

  return (
    <div className={styles.mainContainer}>
      <ActiveUsers users={activeUsers} />
      <Link href="/dashboard/data">
        <button className={styles.expand}>Expand Table</button>
      </Link>
      <DocumentsPendingUsers />
      <PaymentLinkPendingUsers />
      <PaymentDueUsers />
      <CompletedUsers />
    </div>
  );
};

export default UsersPage;
