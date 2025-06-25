import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AppPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (!stored) {
        router.replace('/login');
      } else {
        setUser(JSON.parse(stored));
      }
    }
  }, [router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}</h2>
        <p className="text-gray-600">You are now logged in.</p>
      </div>
    </div>
  );
} 