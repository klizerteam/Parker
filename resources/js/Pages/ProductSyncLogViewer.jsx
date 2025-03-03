import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, ChevronRight,RefreshCw,Loader2, CheckCircle, XCircle,X} from "lucide-react";
import axios from "axios";

const getBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
    case "success":
      return "bg-green-100 text-green-800 px-2 py-1 rounded-full";
    case "failed":
    case "failure":
      return "bg-red-100 text-red-800 px-2 py-1 rounded-full";
    case "pending":
    case "processing":
      return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full";
    default:
      return "bg-blue-100 text-blue-800 px-2 py-1 rounded-full";
  }
};
const getColorBadgeClass = (color) => {
    switch (color.toLowerCase()) {
      case "red":
        return "px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs leading-8 font-semibold";
      case "green":
        return "px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs leading-8 font-semibold";
      case "blue":
        return "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs leading-8 font-semibold";
      default:
        return "px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs leading-8 font-semibold";
    }
  };
 
  const Message = ({ status, message }) => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      setVisible(true); 
      const timer = setTimeout(() => setVisible(false), 6000);
      return () => clearTimeout(timer); 
    }, [message]);
  
    if (!visible) return null;
  
    return (
      <div
        className={`flex items-center gap-2 p-3 rounded-lg text-sm shadow-md ${
          status === "success"
            ? "bg-green-100 text-green-700 border border-green-400"
            : status === "error"
            ? "bg-red-100 text-red-700 border border-red-400"
            : "bg-blue-100 text-blue-700 border border-blue-400"
        }`}
      >
        {status === "loading" && <Loader2 className="animate-spin" size={20} />}
        {status === "success" && <CheckCircle size={20} />}
        {status === "error" && <XCircle size={20} />}
        <span>{message}</span>
        <button
          onClick={() => setVisible(false)} 
          className={`ml-auto text-gray-400 hover:text-gray-700` }
        >
          <X size={20} />
        </button>
      </div>
    );
  };
const SidebarLogViewer = ({ isOpen, onClose, logContent }) => {
    return (
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg border-l border-gray-200 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 min-w-[500px]`} 
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Log Details</h3>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="p-4 overflow-auto h-[90%]">
          <pre className="text-sm bg-gray-100 p-3 rounded whitespace-pre-wrap">
            {logContent || "Loading..."}
          </pre>
        </div>
      </div>
    );
  };
  
  
// Sub-row component to show batch details
const ExpandedComponent = ({ data, onViewLog }) => {
  return (
    
    <div className="p-2 bg-gray-50 border-t border-gray-200">
       <table className="w-full text-sm border border-gray-300 dark:border-gray-600">
       <tbody className="border border-gray-300 dark:border-gray-600">
             <tr className="bg-gray-100 border border-gray-300">
                <th colSpan="6" className="p-2 text-center">Sync Details</th>
             </tr>
             <tr className="border-b border-gray-200">
                <td className="p-2 text-right">
                   <p><strong>Sync ID :</strong> </p>
                </td>
                <td className="p-2">{data.syncDetails.syncId}</td>
                <td className="p-2 text-right"><strong>Started At :</strong> </td>
                <td className="p-2">{data.start_date}</td>
                <td className="p-2 text-right">
                   <strong>Full Log :</strong>
                </td>
                <td className="p-2"><button
                  onClick={() => onViewLog(data.syncDetails.log)}
                  className="px-4 py-1 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-clock">
                    <path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    <circle cx="8" cy="16" r="6"/>
                    <path d="M9.5 17.5 8 16.25V14"/>
                  </svg>
                  View Logs
                </button>
                </td>
             </tr>
             <tr>
                <td className="p-2 text-right"><strong>Sync Duration :</strong> </td>
                <td className="p-2">{data.duration}</td>
                <td className="p-2 text-right"><strong>Ended At :</strong> </td>
                <td className="p-2">{data.end_date}</td>
                <td className="p-2 text-right"> 
                   <strong>Error Log :</strong>
                </td>
                <td className="p-2">
                <button
                  onClick={() => onViewLog(data.syncDetails.error_log)}
                  className="px-4 py-1 text-white bg-red-600 rounded-lg shadow-md transition-all duration-300 ease-in-out flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-clock">
                    <path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    <circle cx="8" cy="16" r="6"/>
                    <path d="M9.5 17.5 8 16.25V14"/>
                  </svg>
                  View Logs
                </button>

                </td>
             </tr>
        
          {data.subRows.length > 0 &&
    <>
          <tr className="bg-gray-100 border border-gray-300">
             <th colSpan="6" className="p-2 text-center">Batch Details</th>
          </tr>
          <tr className="border-b border-gray-200">
             <th className="p-2">Batch #</th>
             <th className="p-2">Products</th>
             <th className="p-2">Processed</th>
             <th className="p-2">Failures</th>
             <th className="p-2">Progress</th>
             <th className="p-2">Status</th>
          </tr>
          {data.subRows && data.subRows.map((batch) => (
          <tr key={batch.batch_id} className="border-b border-gray-200">
             <td className="p-2">{batch.batch_number}</td>
             <td className="p-2"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
            {batch.product_count}
          </span></td>
             <td className="p-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
             {batch.processed_count}
          </span></td>
             <td className="p-2"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
             {batch.failure_count}
          </span></td>
             <td className="p-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                   <div 
                   className="bg-blue-600 h-2.5 rounded-full" 
                   style={{ width: `${batch.progress}%` }}
                   >
                </div>
 </div>
 <span className="text-xs">{batch.progress}%</span>
 </td>
 <td className="p-2">
 <span className={`badge ${getBadgeClass(batch.status)}`}>
 {batch.status}
 </span>
 </td>
 </tr>
 ))}

 </>
 }
 </tbody>
       </table>
 </div>
  );
};

const SyncLogViewer = () => {
  const [syncLogs, setSyncLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState({});
  const [searchText, setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logContent, setLogContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchSyncLogs();
  }, []);

  const fetchSyncLogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/sync-logs');
      setSyncLogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sync logs:", error);
      setLoading(false);
    }
  };
  const handleManualSync = async () => {
    try {
      const data = {
        message: "Sync in progress...",
        status: "loading"
    };
      setMessage(data);
      const response = await axios.get("/sync-products/");
      setMessage(response.data || "Sync started successfully.");
    } catch (error) {
      const data = {
        message: "Failed to start sync. Please try again.",
        status: "error"
    };
      setMessage(data);
    }
    fetchSyncLogs();
  };

  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [skus, setSkus] = useState([]);
  const [selectedSku, setSelectedSku] = useState(""); // Selected SKU

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/syncPerProduct", { data: selectedSku });
      setResponse(res.data.message);
      setInputValue("");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting data:", error);
      setResponse("Submission failed.");
    }
  };

  // Fetch SKUs from Akeneo API on component mount
  // useEffect(() => {
  //   async function fetchSkus() {
  //     try {
  //       const response = await fetch("/api/loadsku"); 
  //       const data = await response.json();
  //       setSkus(data.skus); // Assume API returns { skus: ["sku1", "sku2", "sku3"] }
  //     } catch (error) {
  //       console.error("Error fetching SKUs:", error);
  //     }
  //   }

  //   fetchSkus();
  // }, []);

   // Fetch product details when an SKU is selected
  const handleSkuChange = async (e) => {
    const sku = e.target.value;
    setSelectedSku(sku);
  };

  // Toggle row expansion
  const handleRowExpand = (row) => {
    setExpandedRows((prev) => ({
      ...prev,
      [row.id]: !prev[row.id],
    }));
  };

  const handleViewLog = async (logUrl) => {
    try {
      setSidebarOpen(true);
      setLogContent("Loading...");
      const response = await axios.get(logUrl, { responseType: "text" });
      if (response.data.trim() !== "") {
        setLogContent(response.data);
      }else{
        setLogContent("No Logs Found...");
      }
      
    } catch (error) {
      console.error("Error fetching log file:", error);
      setLogContent("Failed to load log file.");
    }
  };

  // Filter logs based on search text
  const filteredLogs = syncLogs.filter((log) => {
    const searchTermLower = searchText;
    return (
      log.id.toString().includes(searchTermLower) ||
      log.status.toLowerCase().includes(searchTermLower)
    );
  });

  const columns = [
    {
      width: '60px',
      cell: (row) => (
        <button 
        onClick={() => handleRowExpand(row)}
        className="flex items-center justify-center w-6 h-6 aspect-square rounded-full border-2 border-blue-600 text-blue-600 font-bold text-2xl hover:bg-blue-100 focus:ring-2 focus:ring-blue-300 transition"
      >
        {expandedRows[row.id] ? (
          <>
            <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-minus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg></span>
          </>
        ) : (
          <>
            <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg></span>
          </>
        )}
      </button>
      ),
    },
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: "Total",
      selector: row => (
        <span className={`badge ${getColorBadgeClass('blue')}`}>
        {row.total}
      </span>),
      sortable: true,
    },
    {
      name: "Processed",
      selector: row =>  (
        <span className={`badge ${getColorBadgeClass('green')}`}>
        {row.processed}
      </span>),
      sortable: true,
    },
    {
      name: "Failed",
      selector: row =>  (
        <span className={`badge ${getColorBadgeClass('red')}`}>
        {row.failure}
      </span>),
      sortable: true,
    },
    {
      name: "Progress",
      cell: row => (
        <div className="w-full max-w-xs text-center">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${row.progress}%` }}
            ></div>
          </div>
          <span className="text-xs">{row.progress}%</span>
        </div>
      ),
    },
    {
        name: "Updated At",
        selector: row =>(<div className="relative group">
        <span className="cursor-pointer" title={row.updated_at}>{row.updated_at}</span>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block w-max bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md">
          {row.updated_at}
        </div>
      </div>),
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
        cell: row => (
          <span className={`badge ${getBadgeClass(row.status)}`}>
            {row.status}
          </span>
        ),
      },
  ];

 
  const conditionalRowStyles = [
    {
      when: row => expandedRows[row.id],
      style: {
        backgroundColor: '#f9fafb',
      },
    },
  ];

  return (
    <div className="p-4 bg-white min-h-[450px] shadow-sm">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg flex items-center gap-2">
      <button
        onClick={handleManualSync}
        className="px-4 py-2 bg-blue-600 text-white gap-2 flex items-center  rounded hover:bg-blue-700"
      >
       <RefreshCw size={18} /> Manual Sync
      </button>
      {message && <><Message key={message} status={message.status} message={message.message} /></> }
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
        Last Sync : {lastSync} */}
      </h2>

        {/* <div className="flex flex-col items-center space-y-4 p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something..."
        className="border border-gray-300 rounded-lg p-2 w-80"
      />
     

      <select
        value={selectedSku}
        onChange={handleSkuChange}
        className="border border-gray-300 rounded-lg p-2 w-80"
      >
        <option value="">Select an SKU</option>
        {skus.map((sku) => (
          <option key={sku} value={sku}>
            {sku}
          </option>
        ))}
      </select>
       <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </div>*/}



        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search logs..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 border rounded w-64"
          />
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={fetchSyncLogs}
          >
            Refresh
          </button>
        </div>
      </div>

      <DataTable
  columns={columns}
  data={filteredLogs}
  progressPending={loading}
  pagination
  paginationPerPage={10}
  paginationRowsPerPageOptions={[10, 25, 50, 100]}
  highlightOnHover
  striped
  conditionalRowStyles={conditionalRowStyles}
  expandableRows
  expandableRowExpanded={(row) => expandedRows[row.id]}
  expandableRowsComponent={(props) => <ExpandedComponent {...props} onViewLog={handleViewLog} />}
  noHeader
  className="border border-gray-300 text-center"
  expandableIcon={{
    collapsed: <div style={{ display: 'none' }}></div>,
    expanded: <div style={{ display: 'none' }}></div>
  }}
/>

      <SidebarLogViewer isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} logContent={logContent} />
    </div>
  );
};

export default SyncLogViewer;