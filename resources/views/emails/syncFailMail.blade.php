<!-- resources/views/emails/sync-logs-report.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $mailData['title'] ?? 'Sync Logs Report' }}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #4a6fff;
            color: #ffffff;
            padding: 20px;
            border-radius: 5px 5px 0 0;
            margin: -20px -20px 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            text-align:center;
        }
        .summary-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        .summary-item {
            flex: 1;
            min-width: 120px;
            background-color: #f5f8ff;
            border-left: 4px solid #4a6fff;
            margin: 5px;
            padding: 10px 15px;
            border-radius: 4px;
        }
        .summary-item.warning {
            background-color: #fff9f5;
            border-left-color: #ff9a4a;
        }
        .summary-item.danger {
            background-color: #fff5f5;
            border-left-color: #ff4a4a;
        }
        .summary-item.success {
            background-color: #f5fff7;
            border-left-color: #4aff91;
        }
        .summary-label {
            font-size: 12px;
            text-transform: uppercase;
            color: #666;
            margin-bottom: 5px;
        }
        .summary-value {
            font-size: 20px;
            font-weight: bold;
        }
        .status-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }
        .status-pending { background-color: #e6e6e6; color: #666; }
        .status-running { background-color: #e6f7ff; color: #0091ff; }
        .status-completed { background-color: #e6ffe6; color: #00b300; }
        .status-failed { background-color: #ffe6e6; color: #cc0000; }
        
        .log-container {
            background-color: #f5f5f5;
            border-radius: 4px;
            padding: 15px;
            margin-top: 20px;
            overflow: auto;
            max-height: 200px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            white-space: pre-wrap;
        }
        .error-log {
            background-color: #fff0f0;
            border-left: 4px solid #ff4a4a;
        }
        .footer {
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .timestamps {
            margin-top: 20px;
            font-size: 13px;
            color: #666;
        }
        .table-container {
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
        }
        th {
            background-color: #f0f4ff;
            padding: 10px;
            text-align: left;
            font-weight: bold;
            border-bottom: 2px solid #ddd;
        }
        td {
            padding: 8px 10px;
            border-bottom: 1px solid #eee;
        }
        .btn {
            display: inline-block;
            padding: 10px 16px;
            margin: 5px 0;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-primary {
            background-color: #4a6fff;
            color: #ffffff;
            border: none;
        }
        .btn-primary:hover {
            background-color: #3555d9;
        }
        .btn-danger {
            background-color: #ff4a4a;
            color: #ffffff;
            border: none;
        }
        .btn-danger:hover {
            background-color: #d93535;
        }
        .log-header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        .log-preview {
            max-height: 100px;
            overflow: hidden;
            position: relative;
        }
        .log-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: linear-gradient(transparent, #f5f5f5);
        }
        .error-log .log-fade {
            background: linear-gradient(transparent, #fff0f0);
        }
        @media (max-width: 600px) {
            .summary-item {
                min-width: 100%;
                margin: 5px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{{ $mailData['title'] ?? 'Akeneo Parker Sync Report' }}</h1>
        </div>
        
        <div class="summary-box">
            <div class="summary-item">
                <div class="summary-label">Connection ID</div>
                <div class="summary-value">{{ $mailData['syncLog']->connection_id ?? 'N/A' }}</div>
            </div>
            
            <div class="summary-item 
                @if($mailData['syncLog']->status == 'completed') success
                @elseif($mailData['syncLog']->status == 'failed') danger
                @endif
            ">
                <div class="summary-label">Status</div>
                <div class="summary-value">
                    <span class="status-badge status-{{ strtolower($mailData['syncLog']->status) }}">
                        {{ ucfirst($mailData['syncLog']->status) }}
                    </span>
                </div>
            </div>
            
            <div class="summary-item success">
                <div class="summary-label">Processed</div>
                <div class="summary-value">{{ $mailData['syncLog']->processed }}</div>
            </div>
            
            <div class="summary-item 
                @if($mailData['syncLog']->failure > 0) danger @else success @endif
            ">
                <div class="summary-label">Failures</div>
                <div class="summary-value">{{ $mailData['syncLog']->failure }}</div>
            </div>
        </div>
        
        <div class="table-container">
            <table>
                <tr>
                    <th>Sync ID</th>
                    <td>#{{ $mailData['syncLog']->id }}</td>
                </tr>
                <tr>
                    <th>Started At</th>
                    <td>{{ $mailData['syncLog']->start_date ? \Carbon\Carbon::parse($mailData['syncLog']->start_date)->format('M d, Y H:i:s') : 'Not started' }}</td>
                </tr>
                <tr>
                    <th>Ended At</th>
                    <td>{{ $mailData['syncLog']->end_date ? \Carbon\Carbon::parse($mailData['syncLog']->end_date)->format('M d, Y H:i:s') : 'Not started' }}</td>
                </tr>
                <tr>
                    <th>Duration</th>
                    <td>
                        @if($mailData['syncLog']->start_date && $mailData['syncLog']->end_date)
                            {{ \Carbon\Carbon::parse($mailData['syncLog']->start_date)->diffForHumans(\Carbon\Carbon::parse($mailData['syncLog']->end_date), true) }}
                        @else
                            In progress
                        @endif
                    </td>
                </tr>
                <tr>
                    <th>Total Items</th>
                    <td>{{ $mailData['syncLog']->total }}</td>
                </tr>
                <tr>
                    <th>Success Rate</th>
                    <td>
                        @if($mailData['syncLog']->total > 0)
                            {{ round((($mailData['syncLog']->processed - $mailData['syncLog']->failure) / $mailData['syncLog']->total) * 100, 1) }}%
                        @else
                            N/A
                        @endif
                    </td>
                </tr>
                <tr>
                    <th>Created By</th>
                    <td>{{ $mailData['syncLog']->created_by ?? 'System' }}</td>
                </tr>
            </table>
        </div>
    
         <div class="log-header">
            @if($mailData['syncLog']->log)
                <a href="{{ $mailData['syncLog']->log }}" target="_blank" class="btn btn-primary">View Full Log</a>
                @endif
                @if($mailData['syncLog']->error_log)
                <a href="{{ $mailData['syncLog']->error_log }}" target="_blank" class="btn btn-danger">View Full Error Log</a>
            @endif
        </div>
                
        <div class="timestamps">
            <p>
                <strong>Started:</strong> {{ $mailData['syncLog']->start_date ? \Carbon\Carbon::parse($mailData['syncLog']->start_date)->format('M d, Y H:i:s') : 'Not started' }}<br>
                <strong>Completed:</strong> {{ $mailData['syncLog']->end_date ? \Carbon\Carbon::parse($mailData['syncLog']->end_date)->format('M d, Y H:i:s') : 'In progress' }}<br>
                <strong>Report Generated:</strong> {{ now()->format('M d, Y H:i:s') }}
            </p>
        </div>
        
        <div class="footer">
            <p>{{ $mailData['footer'] ?? 'This is an automated message from your Akeneo Parker Sync System. Please do not reply to this email.' }}</p>
            <p>&copy; {{ date('Y') }} {{ $mailData['company'] ?? 'Your Company' }}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>