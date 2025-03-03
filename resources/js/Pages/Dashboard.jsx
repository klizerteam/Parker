import { useState, useEffect } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ProductSyncLogViewer from "@/Pages/ProductSyncLogViewer";
import axios from "axios";
export default function Dashboard() {
    const [lastSync, setLastSync] = useState([]);

  useEffect(() => {
    fetchLastSync();
  }, []);
  const fetchLastSync = async () => {
    try {
     
      const response = await axios.get('/api/last-sync');
      setLastSync(response.data);
    } catch (error) {
      
    }
  };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Akeneo Parker Sync Logs
                </h2>
                <h4 className="text-base flex items-center gap-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="font-semibold lucide lucide-history">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                    <path d="M12 7v5l4 2"/>
                    </svg>
                    <span className="font-semibold">Last Sync :</span> <span className="text-blue-600">{lastSync.last_sync_time} {lastSync.duration != 'Not started' && <>(<span className="font-semibold">{lastSync.duration}</span>)</>}</span>
                </h4>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-1">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-4 pt-0 text-gray-900">
                            <ProductSyncLogViewer />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
