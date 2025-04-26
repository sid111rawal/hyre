import { getSession, useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || !session.user.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const pendingUsers = await prisma.user.findMany({
    where: {
      approved: false,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
  const pendingEmployers = pendingUsers.filter(
    (user) => user.role === 'EMPLOYER'
  );

  const pendingWorkers = pendingUsers.filter(
    (user) => user.role === 'WORKER'
  );



  return {
    props: {
      pendingUsers: JSON.parse(JSON.stringify(pendingUsers)),
    },
  };
}

export default function Admin({ pendingUsers, pendingEmployers, pendingWorkers }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'loading') return <div className='bg-black min-h-screen flex flex-col items-center justify-center text-white'>Loading users...</div>;

  const handleApprove = async (userId, userList, setUserList, index) => {
    try {
      const response = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const updatedList = [...userList];
        updatedList.splice(index, 1);
        setUserList(updatedList);
      } else {
        console.error('Error approving user');
      }
    } catch (error) {
      console.error('Error approving user', error);
    }
  };
  const handleDecline = async (userId, userList, setUserList, index) => {
    try {
      const response = await fetch('/api/admin/decline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const updatedList = [...userList];
        updatedList.splice(index, 1);
        setUserList(updatedList);
      } else {
        console.error('Error declining user');
      }
    } catch (error) {
      console.error('Error declining user', error);
    }
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      {/* Pending Employers */}
      <div className="mb-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Pending Employers</h2>
        {pendingEmployers.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-700">
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Email</th>
                <th className="text-left py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingEmployers.map((user, index) => (
                <tr key={user.id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleApprove(user.id,pendingEmployers, setPendingEmployers, index)} className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded mr-2">Approve</button>
                    <button onClick={() => handleDecline(user.id,pendingEmployers, setPendingEmployers, index)} className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded">Decline</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400">No pending employers.</p>
        )}
      </div>

      {/* Pending Workers */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Pending Workers</h2>
        {pendingWorkers.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-700">
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Email</th>
                <th className="text-left py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingWorkers.map((user, index) => (
                <tr key={user.id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleApprove(user.id,pendingWorkers, setPendingWorkers, index)} className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded mr-2">Approve</button>
                    <button onClick={() => handleDecline(user.id,pendingWorkers, setPendingWorkers, index)} className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded">Decline</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400">No pending workers.</p>
        )}
      </div>
    </div>
  );
        }