# MCP API Server

A modular, extensible API server for tool orchestration and analysis, designed for easy integration and testing of custom tools. Built with Node.js and Express.

## Features
- **Modular Tool Loading:** Dynamically load and register tools from the `tools/` directory.
- **Centralized Tool Registry:** Manage available tools via `ToolReg/toolRegistry.js`.
- **RESTful API Routing:** All tool-related API endpoints are managed through `routes/mcpRouter.js`.
- **Easy Extensibility:** Add new tools by simply placing them in the `tools/` directory and updating the registry.
- **Simple Server Setup:** Lightweight, minimal dependencies, and easy to run.

## Project Structure
```
MCP_API_SERVER/
├── package.json           # Project metadata and dependencies
├── server.js              # Main server entry point
├── toolLoader.js          # Tool loader logic
├── routes/
│   └── mcpRouter.js       # API route definitions
├── ToolReg/
│   └── toolRegistry.js    # Tool registry management
└── tools/
    ├── analyze.js         # Example tool: analyze
    └── testAPI.js         # Example tool: test API
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Deku4702/MCP_Server_-For_API_TESTING.git
   cd MCP_API_SERVER
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server
Start the server with:
```sh
node server.js
```
By default, the server runs on port 3000. You can change the port in `server.js` if needed.

### API Usage
- All API endpoints are routed through `/api` (see `routes/mcpRouter.js`).
- Example endpoint: `POST /api/tool/analyze`
- Request and response formats depend on the tool implementation.

#### Example Request
```
POST /api/tool/analyze
Content-Type: application/json

{
  "input": "your data here"
}
```

#### Example Response
```
{
  "result": "analysis result"
}
```

## Adding New Tools
1. Create a new tool file in the `tools/` directory (e.g., `myTool.js`).
2. Export your tool as a module.
3. Register your tool in `ToolReg/toolRegistry.js`.
4. The tool will be available via the API after restarting the server.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Author
- [Deku4702](https://github.com/Deku4702)

---
*This project is intended for educational and testing purposes. Use at your own risk.*
